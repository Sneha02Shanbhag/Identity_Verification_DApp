const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const Tesseract = require('tesseract.js');

const app = express();
const PORT = 5000;

const UPLOADS_FOLDER = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOADS_FOLDER)) {
  fs.mkdirSync(UPLOADS_FOLDER);
}

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_FOLDER),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({ storage });

app.post('/verify-document', upload.single('document'), async (req, res) => {
  try {
    const nameToVerify = (req.body.name || '').toLowerCase().trim();
    const dob = req.body.dob || 'Not Provided';
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    const imagePath = req.file.path;
    const { data: { text } } = await Tesseract.recognize(imagePath, 'eng');

    const match = text.toLowerCase().includes(nameToVerify);
    console.log(`[✅ OCR Completed] Name Match: ${match}`);

    res.json({
      verified: match,
      filePath: `/uploads/${req.file.filename}`,
      message: match ? 'Verified successfully' : 'Name not found in document'
    });

    // Keep file stored in /uploads
  } catch (err) {
    console.error('Error in /verify-document:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use('/uploads', express.static(UPLOADS_FOLDER));

app.get('/', (req, res) => res.json({ message: 'Server is running!' }));

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});

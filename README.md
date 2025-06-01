# Identity Verification DApp using Blockchain

A decentralized application (DApp) that enables identity verification through smart contracts on the Ethereum blockchain.

---

⚠️ This project is for educational purpose. Redistribution is strictly prohibited without permission.
-©️ 2025 Sneha Shanbhag. All rights are reseverd.


## 🧱 Tech Stack

- **Frontend**: HTML, JavaScript, Tailwind CSS
- **Smart Contract**: Solidity, Hardhat
- **Blockchain**: Local Hardhat Network / MetaMask
- **Backend (optional)**: Node.js (for OCR/file processing)
- **Tools**: Ethers.js, IPFS, Hardhat, MetaMask

---

## 🚀 Installation

```bash
# 1. Clone the repository
git clone https://github.com/Sneha02Shanbhag/Identity_Verification_DApp.git
cd Identity_Verification_DApp

# 2. Install dependencies
npm install

# 3. Start Hardhat local blockchain
npx hardhat node

# 4. Deploy the smart contract
npx hardhat run scripts/deploy.js --network localhost

#6.Start the backend
node server.js

# 5. Start frontend (if applicable)
# Use VS Code Live Server or serve with any HTTP server
npx serve
```
🔐 Features:

🔘Register user with name and date of birth

📁Upload identity documents

✅Admin dashboard to verify users

🔐Smart contract to record verification

💻Frontend integration with MetaMask


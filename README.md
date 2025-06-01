# Identity Verification DApp using Blockchain

A decentralized application (DApp) that enables identity verification through smart contracts on the Ethereum blockchain.

---

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
git clone https://github.com/Sneha02Shanbhag/Identity_Verification_DApp-using-Blockchain.git
cd Identity_Verification_DApp-using-Blockchain

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

const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"; // Deployed contract address
const abi = contractABI; // Make sure contractABI is defined or imported

//let provider;
//let signer;
let contract;

async function connectWallet() {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    provider = new ethers.providers.Web3Provider(window.ethereum); // Corrected to Web3Provider
    signer = await provider.getSigner();
    contract = new ethers.Contract(contractAddress, abi, signer);
    alert("Wallet connected!");
  } else {
    alert("Please install MetaMask!");
  }
}

async function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const dataHash = ethers.id(name + email); // Hash the concatenated name and email
  const tx = await contract.register(dataHash); // Call the smart contract's register function
  await tx.wait(); // Wait for the transaction to be mined
  alert("Registered!");
}

async function checkVerification() {
  const address = document.getElementById("status-address").value; // Ensure the correct ID here
  const result = await contract.getStatus(address); // Call smart contract's getStatus function
  document.getElementById("status-result").innerText = result ? "✅ Verified" : "❌ Not Verified";
}

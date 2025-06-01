let provider;
let signer;
let userAddress;

document.getElementById("connectButton").addEventListener("click", async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();
      userAddress = await signer.getAddress();

      document.getElementById("walletAddress").textContent = `Connected: ${userAddress}`;
    } catch (error) {
      console.error("MetaMask connection error:", error);
    }
  } else {
    alert("Please install MetaMask to use this DApp!");
  }
});

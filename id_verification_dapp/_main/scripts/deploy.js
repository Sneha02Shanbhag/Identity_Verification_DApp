const hre = require("hardhat");

async function main() {
  const IdentityVerification = await hre.ethers.getContractFactory("IdentityVerification");

  const contract = await IdentityVerification.deploy();

  await contract.deploymentTransaction().wait(); // This works with Ethers v6 in Hardhat

  console.log("Contract deployed at:", contract.target);
}

main().catch((error) => {
  console.error("❌ Error deploying contract:", error);
  process.exitCode = 1;
});

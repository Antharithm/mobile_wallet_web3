const hre = require("hardhat");

async function main() {
  const wallet = await hre.ethers.deployContract("Wallet");

  await wallet.waitForDeployment();

  console.log(`Wallet was deployed to ${wallet.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

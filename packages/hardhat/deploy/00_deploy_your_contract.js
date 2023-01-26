const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  await deploy("YourCollectible", {
    from: deployer,
    rgs: [],
    log: true,
  });

  const yourCollectible = await ethers.getContract("YourCollectible", deployer);

  if (chainId !== "31337") {
    try {
      console.log(" 🎫 Verifing Contract on Etherscan... ");
      await sleep(3000); // wait 3 seconds for deployment to propagate bytecode
      await run("verify:verify", {
        address: yourCollectible.address,
        contract: "contracts/YourCollectible.sol:YourCollectible",
        // contractArguments: [yourToken.address],
      });
    } catch (e) {
      console.log(" ⚠️ Failed to verify contract on Etherscan ");
    }
  }
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports.tags = ["YourCollectible"];

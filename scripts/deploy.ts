import { ethers } from "hardhat";

const main = async () => {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = ethers.utils.parseEther("1");

  const Transactions = await ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy(unlockTime, { value: lockedAmount });

  await transactions.deployed();

  console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${transactions.address}`);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
}

runMain();

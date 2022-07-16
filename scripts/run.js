const main = async () => {
  const contractCreator = await hre.ethers.getContractFactory("MyEpicNFT");
  const nftContract = await contractCreator.deploy();
  await nftContract.deployed();
  console.log("Contract deployed");

  let txn = await nftContract.makeAnEpicNFT({
    value: hre.ethers.utils.parseEther("0.05"),
  });
  await txn.wait();

  txn = await nftContract.makeAnEpicNFT({
    value: hre.ethers.utils.parseEther("0.05"),
  });
  await txn.wait();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

runMain();

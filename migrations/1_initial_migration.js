const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");


module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);

  const tokenMock = await DaiTokenMock.deployed();
  // Mint 1,000 Dai Tokens for the deployer
  await tokenMock.mint(
    "0xc55712d4194BB1b93BE784BfE97570AFF4977C7c",
    "1000000000000000000000"
  )

};

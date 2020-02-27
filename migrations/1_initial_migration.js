const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");


module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);

  const tokenMock = await DaiTokenMock.deployed();
  // Mint 1,000 Dai Tokens for the deployer
  

};

const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");


module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

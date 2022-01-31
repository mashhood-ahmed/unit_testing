const AdvertisementAuction = artifacts.require("AdvertisementAuction");

module.exports = function (deployer) {
  deployer.deploy(AdvertisementAuction);
};

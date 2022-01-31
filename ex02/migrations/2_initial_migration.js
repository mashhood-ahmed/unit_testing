const EscrowService = artifacts.require("EscrowService");

module.exports = function (deployer) {
  deployer.deploy(EscrowService, '0xfa092e948af1d93cf7eee29b138a630246cf4f0d', '0x54c78347202247b7ec5a20b1fedf5ae0a9c3b64e', 50);
};

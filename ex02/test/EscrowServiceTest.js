let mycontract = artifacts.require('EscrowService')
contract('EscrowService', async(accounts) => {

    let contractObj;

    beforeEach('initilize constructor', async () => {
        contractObj = await mycontract.new('0xfa092e948af1d93cf7eee29b138a630246cf4f0d', '0x54c78347202247b7ec5a20b1fedf5ae0a9c3b64e', 50);
    }),

    // it('testing constructor default value seller', async () => {
    //    let data = await contractObj.getSellerAddress.call()
    //    assert.equal(data, '0xFA092E948aF1D93cF7eEe29B138A630246Cf4F0D', 'this is not the default value of seller')        
    // })

    it('setting buyyer address', async () => {
        let data = await contractObj.setBuyyerAddress('0x2b193f4193f6b1ec1e203a7803ea16e91d1b3d0d', {from:accounts[0]} )
    }),

    it('testing constructor default value buyyer', async () => {
        let data = await contractObj.getBuyyerAddress.call()
        assert.equal(data, '0x0000000000000000000000000000000000000000', 'this is not the default value of buyyer')
        console.log(data)
    })

    // it('testing constructor defalut value of agreed_payment', async () => {
    //     let instance = await mycontract.deployed()
    //     let data = await instance.getAgreementPayment.call()
    //     assert.equal(data, 0, 'this is not the default value of agreed payment.')
    // }),

    // it('testing get_deposit function for buyyer', async () => {
    //     let instance = await mycontract.deployed()
    //     let status = true;
    //     try {
    //         let data = await instance.get_deposit.call({from:'0x0000000000000000000000000000000000000000'})
    //     } catch(err) {
    //         status = false;
    //     }

    //     assert.equal(status, true, 'you must be the buyyer.')
    // }),

    // it('testing payment release function for seller', async () => {
    //     let instance = await mycontract.deployed()
    //     let status = true
    //     try {
    //         let data = await instance.payment_release.call({from:'0x0000000000000000000000000000000000000000'})
    //     } catch(err) {
    //         status = false
    //     }

    //     assert.equal(status,true,'you\'r not a seller')
        
    // })

})
const auctionContract = artifacts.require('AdvertisementAuction')
contract('Advertisement Auction Contract', async (accounts) => {
    let auctionContractObj
    
    beforeEach('Initilize Advertisement Auction Constructor', async () => {
        auctionContractObj = await auctionContract.deployed()
    }),

    it('test default constructor values', async () => {
        const image = "Advertisement Auction Image"
        const text = "Advertisement Auction Text"
        const owner_addr = "0xFA092E948aF1D93cF7eEe29B138A630246Cf4F0D"
        const txt =  await auctionContractObj.get_advertisement_text.call()
        const img = await auctionContractObj.get_advertisement_image.call()
        const owner = await auctionContractObj.get_contract_owner_addr.call()

        assert.equal(txt,text,"this text is not the default value")
        assert.equal(img,image, "this image is not the default image")
        assert.equal(owner, owner_addr, "this is not the owner")
    }),

    it('set advertisement values', async () => {
        const image = "image1"
        const text = "text1"
        const owner_addr = "0x54c78347202247b7ec5a20b1fedf5ae0a9c3b64e"
        const amount = 5
        let status = true

        const data = auctionContractObj.set_advertisement_data(amount,image,text,{from:accounts[0]})
    }),

    it('test values after executing set_advertisement_values', async () => {
        const image = "image1"
        const text = "text1"
        const owner_addr = "0xFA092E948aF1D93cF7eEe29B138A630246Cf4F0D"
        const txt =  await auctionContractObj.get_advertisement_text.call()
        const img = await auctionContractObj.get_advertisement_image.call()
        const owner = await auctionContractObj.get_contract_owner_addr.call()

        assert.equal(txt,text,"this text is not the default value")
        assert.equal(img,image, "this image is not the default image")
        assert.equal(owner, owner_addr, "this is not the owner")
        
    })

})
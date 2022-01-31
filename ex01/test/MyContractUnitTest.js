let myContract = artifacts.require('MyContract')
contract('MyContract', async (accounts) => {

    it('hardcoded values must be same as constructor', () => {
        return myContract.deployed().then((instance) => {
            return instance.getData.call().then(function(data){
                assert.equal(data[0], "Mashhood", "name must be same as in constructor")
                assert.equal(data[1], 25, "age must be same as in constructor")
                assert.equal(data[2], true, "is_alnafi_student must be same as in constructor")
            })
        })
    }),

    it('setData function must be working fine.', () => {
        return myContract.deployed().then((instance) => {
            const name = "Aizaz"
            const age = 29;
            const is_alnafi_student = true;
            return instance.setData(name,age,is_alnafi_student, {from:accounts[0]}).then(() => {
                return instance.getData.call().then((data) => {
                    assert.equal(data[0], "Aizaz", "aizaz should be set as name")
                    assert.equal(data[1], 29, "29 should be set as age")
                    assert.equal(data[2], true, "this should be true.")
                })
            })
        })
    }),

    it('setData values should working fine:Stage2', async () => {
        let instance = await myContract.deployed()
        const name = "Aizaz K"
        const age = 29;
        const is_alnafi_student = true;
        let data = await instance.setData(name, age, is_alnafi_student,{from:accounts[0]})
    }),

    it('hardcoded values must be same as constructor:Stage2', async () => {
        let instance = await myContract.deployed()
        let data = await instance.getData.call()
        assert.equal(data[0], "Aizaz K", "name must be same as in constructor")
        assert.equal(data[1], 29, "age must be same as in constructor")
        assert.equal(data[2], true, "is_alnafi_student must be same as in constructor")
    }),

    it('testing for admin', async () => {
        let instance = await myContract.deployed()
        let status = true
        try {
            let data = await instance.returnSecret.call({from:accounts[0]})
        } catch(err) {
            status = false
        }

        assert.equal(status,true, "you must be admin")

    })

})
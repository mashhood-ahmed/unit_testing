// SPDX-License-Identifier: MIT
// solium-disable linebreak-style
pragma solidity >= 0.4.22 < 0.9.0;

contract MyContract {
    string name;
    uint8 age;
    bool is_alnafi_student;
    
    address owner;

    constructor() {
        name = "Mashhood";
        age  = 25;
        is_alnafi_student = true;
        owner = msg.sender;
    }

    modifier isOwner() {
        require(owner == msg.sender, "you must be owner.");
        _;
    }

    function setData(string calldata _name, uint8 _age, bool _is_alnafi_student) public {
        name = _name;
        age = _age;
        is_alnafi_student = _is_alnafi_student;
    }

    function getData() view public returns(string memory, uint8, bool) {
        return(name, age, is_alnafi_student);
    }

    function returnSecret() public isOwner view returns(uint val) {
        return 1996;
    }


}
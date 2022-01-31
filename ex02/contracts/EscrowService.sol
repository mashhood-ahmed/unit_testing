// SPDX-License-Identifier: MIT
// solium-disable linebreak-style
pragma solidity >= 0.4.22 < 0.9.0;

contract EscrowService {
    
    address payable private seller;
    address private buyyer;
    uint public agreed_payment;
    
    constructor(address payable _seller, address _buyyer, uint _agreed_payment) {
        seller = _seller;
        buyyer = _buyyer;
        agreed_payment = _agreed_payment;
    }
    
    function getSellerAddress() public view returns(address) {
        return seller;
    } 

    function setSellerAddress(address payable _seller) public {
        seller = _seller;
    }

    function setBuyyerAddress(address _buyyer) public {
        buyyer = _buyyer;
    }

    function getBuyyerAddress() public view returns(address) {
        return buyyer;
    }

    function getAgreementPayment() public view returns(uint) {
        return agreed_payment;
    }

    function get_deposit() public payable {
        require(buyyer == msg.sender, "you're not buyyer");
        require(agreed_payment == msg.value, "kindly deposit the agreed amount");
    }
    
    function payment_release() public payable {
        require(msg.sender == seller, "you're not seller");
        seller.transfer( address(this).balance );
    }
}
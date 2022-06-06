// SPDX-License-Identifier: MIT

pragma solidity >=0.5.0 <0.9.0;

// import "hardhat/console.sol";

contract MerkleTree {
    string public name = "MerkleToken";
    string public symbol = "MT"; // symbol of the token
    uint256 public totalSupply = 1000000000; // total supply of the token
    address public owner;

    mapping(address => uint256) balances;

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint256 amount) external {
        // console.log("Sender is sending ", amount, " to ", to);
        require(balances[msg.sender] >= amount);
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}

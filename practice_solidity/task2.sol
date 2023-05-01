//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract add{
    int a=10;
    int b=100;
    
    function sum() public view returns(int){
        return a+b;
    }
    function sum2(int _a,int _b) public pure returns(int){
       return _a+_b;
    }
}
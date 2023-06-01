const connectMetamask = async () => {
    if(window.ethereum !== "undefined"){
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0];
    }
    const ABI =[
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }
  ],
  "name": "PatchArray",
  "outputs": [
      {
          "internalType": "string",
          "name": "patchname",
          "type": "string"
      },
      {
          "internalType": "string",
          "name": "bugname",
          "type": "string"
      },
      {
          "internalType": "string",
          "name": "patchversion",
          "type": "string"
      },
      {
          "internalType": "string",
          "name": "patchplatform",
          "type": "string"
      },
      {
          "internalType": "string",
          "name": "patchfeatures",
          "type": "string"
      },
      {
          "internalType": "uint256",
          "name": "time",
          "type": "uint256"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "check",
  "outputs": [
      {
          "internalType": "bool",
          "name": "",
          "type": "bool"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "string",
          "name": "_patchname",
          "type": "string"
      }
  ],
  "name": "findandreply",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "string",
          "name": "_patchname",
          "type": "string"
      }
  ],
  "name": "findandreplynotverified",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [],
  "name": "getDetails",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [],
  "name": "getdetails",
  "outputs": [
      {
          "components": [
              {
                  "internalType": "string",
                  "name": "patchname",
                  "type": "string"
              },
              {
                  "internalType": "string",
                  "name": "bugname",
                  "type": "string"
              },
              {
                  "internalType": "string",
                  "name": "patchversion",
                  "type": "string"
              },
              {
                  "internalType": "string",
                  "name": "patchplatform",
                  "type": "string"
              },
              {
                  "internalType": "string",
                  "name": "patchfeatures",
                  "type": "string"
              },
              {
                  "internalType": "uint256",
                  "name": "time",
                  "type": "uint256"
              }
          ],
          "internalType": "struct VerifyPatch.Patch[]",
          "name": "",
          "type": "tuple[]"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "string",
          "name": "",
          "type": "string"
      }
  ],
  "name": "map",
  "outputs": [
      {
          "internalType": "string",
          "name": "",
          "type": "string"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{ 
  "inputs": [
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }
  ],
  "name": "patches",
  "outputs": [
      {
          "internalType": "string",
          "name": "",
          "type": "string"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }
  ],
  "name": "result",
  "outputs": [
      {
          "internalType": "string",
          "name": "",
          "type": "string"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "send",
  "outputs": [
      {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
      },
      {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
      }
  ],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "string",
          "name": "_bugname",
          "type": "string"
      },
      {
          "internalType": "string",
          "name": "_patchname",
          "type": "string"
      },
      {
          "internalType": "string",
          "name": "_patchversion",
          "type": "string"
      },
      {
          "internalType": "string",
          "name": "_patchplatform",
          "type": "string"
      },
      {
          "internalType": "string",
          "name": "_patchfeatures",
          "type": "string"
      }
  ],
  "name": "setPatch",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}
];
    
    const Address = "0xBA90C5AeD0b8d50b13C0Eb15E60EbCBAa90fcaF8";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    
}
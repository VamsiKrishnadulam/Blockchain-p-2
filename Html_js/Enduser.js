// let account;
// const connectMetamask = async () => {
    
//     if(window.ethereum !== "undefined"){
//         const accounts = await ethereum.request({method: "eth_requestAccounts"});
//         account = accounts[0];
//     }
//     const ABI =[
//         {
//             "inputs": [
//                 {
//                     "internalType": "string",
//                     "name": "_bugs",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_des",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_steps",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_environmentDetails",
//                     "type": "string"
//                 }
//             ],
//             "name": "feedbacks",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "get",
//             "outputs": [
//                 {
//                     "components": [
//                         {
//                             "internalType": "string",
//                             "name": "bugs",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "description",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "stepsToReproduceBugs",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "environmentDetails",
//                             "type": "string"
//                         }
//                     ],
//                     "internalType": "struct feedback.report[]",
//                     "name": "",
//                     "type": "tuple[]"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         }
//     ];
//     const Address = "0xdE29E1b0c010b2e3468cef6D5d983AB8D8c8Ab07";
//     window.web3 = await new Web3(window.ethereum);
//     window.contract = await new window.web3.eth.Contract(ABI, Address);
    
// }

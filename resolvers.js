const fs = require('fs/promises');
const Web3 = require('web3')
const web3 = new Web3('https://nd-735-537-148.p2pify.com/cb05e6dc79997dc49eb02b0b49f5e6af')
let contract = new web3.eth.Contract([
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addressToAccesslist",
				"type": "address"
			}
		],
		"name": "addUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "createdBy",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "objType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "ipfsHash",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "parent",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "children",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "updated",
				"type": "uint256"
			}
		],
		"name": "objectCreationEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "deletedBy",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "objType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "ipfsHash",
				"type": "string"
			}
		],
		"name": "objectDeleteEvent",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_objType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_ipfsHash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_parent",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_children",
				"type": "string"
			}
		],
		"name": "objectSet",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_obj",
				"type": "string"
			}
		],
		"name": "removeObject",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addressToAccesslist",
				"type": "address"
			}
		],
		"name": "removeUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			}
		],
		"name": "objectExists",
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
				"name": "_id",
				"type": "string"
			}
		],
		"name": "objectGet",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "id",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "objType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ipfsHash",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "parent",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "children",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "updated",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isSet",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "index",
						"type": "uint256"
					}
				],
				"internalType": "struct ObjectDataStore.Obj",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "objectGetArray",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "id",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "objType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ipfsHash",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "parent",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "children",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "updated",
						"type": "uint256"
					}
				],
				"internalType": "struct ObjectDataStore.ObjArray[]",
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
				"internalType": "uint256",
				"name": "_key",
				"type": "uint256"
			}
		],
		"name": "objectGetArrayItem",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "objectGetCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "objectLastkey",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_accesslistedAddress",
				"type": "address"
			}
		],
		"name": "verifyUser",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
], "0x426211b9960FE62bbB2Bd16E73d904bAb3d0136D")

String.prototype.stripSlashes = function(){
    return this.replace(/\\(.)/mg, "$1");
}

const resolvers = {
 Query: {
    objectExists: async (_, {id}) => {
      try {
          const ethCall = await contract.methods.objectExists(id).call()
          return ethCall;
      } catch (e) {
        throw e;
      }
    },
    objectCount: async () => {
      try {
          const ethCall = await contract.methods.objectGetCount().call()
          return ethCall;
      } catch (e) {
        throw e;
      }
    },
    objectGetAll: async () => {
      try {
          const ethCall = await contract.methods.objectGetArray().call()
          return ethCall;
      } catch (e) {
        throw e;
      }
    },
    objectInit: async () => {
      try {
          const data = await fs.readFile('/var/cachegen/objCache.json');
          return JSON.parse(data);
      } catch (e) {
        throw e;
      }
    },
    objectGetIpfs: async () => {
      try {
          const data = await fs.readFile('/var/cachegen/ipfsCache.json');
          const returnData = JSON.parse(data);
          return JSON.stringify(returnData);
      } catch (e) {
        throw e;
      }
    },
    objectGet: async (_, {id}) => {
      try {
          const ethCall = await contract.methods.objectGet(id).call()
	  if (ethCall.id == "")
	  {
		throw new UserInputError('Object record not found');
      	  }
	return ethCall;
      } catch (e) {
        throw e;
     }
    }
  }
}

module.exports = { resolvers }

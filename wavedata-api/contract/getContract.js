import { Abi, ContractPromise } from '@polkadot/api-contract'
import abiData from './ink_contracts/wavedata.json';


const address = 'WJN1LKFi6q4GdU3FMBW8pyJCVzDmtL5vXBWyBn16ShWZWqc'//smart contract deployed address 
	
export default async function getContract(api) {


    const abi = new Abi(abiData, api.registry.getChainProperties())

    const contract = new ContractPromise(api, abi, address)

	return contract
  }
  
import { Abi, ContractPromise } from '@polkadot/api-contract'
import abiData from './ink_contracts/wavedata.json';


const address = 'X9T5DyEP5VMv1h6sdEJkeHivHHhp1MyBxvEjHTwpfKKzRYh'//smart contract deployed address 
	
export default async function getContract(api) {


    const abi = new Abi(abiData, api.registry.getChainProperties())

    const contract = new ContractPromise(api, abi, address)

	return contract
  }
  
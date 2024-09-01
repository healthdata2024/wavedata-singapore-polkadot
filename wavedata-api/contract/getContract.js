import { Abi, ContractPromise } from '@polkadot/api-contract'
import abiData from './ink_contracts/wavedata.json';


const address = 'apfgSpyj5sbQwG6uC9pwX9perpw9UexSSs6ZTpYALseGHHw'//smart contract deployed address 
	
export default async function getContract(api) {


    const abi = new Abi(abiData, api.registry.getChainProperties())

    const contract = new ContractPromise(api, abi, address)

	return contract
  }
  
import { useEffect, useState } from 'react';
import { Contract } from '@ethersproject/contracts';
import { ContractName, useEthers } from '.';
import { abis } from '../abi';
import { contractAddresses } from '../config';

type ContractMap = { [key: string]: Contract };

export function useContract(): ContractMap {
  const [contracts, setContracts] = useState<ContractMap>({});
  const { signer, networkId } = useEthers();
  useEffect(() => {
    if (signer && networkId) {
      const result: ContractMap = {};
      for (const [name, abi] of Object.entries(abis)) {
        result[name] = new Contract(contractAddresses[networkId][name as ContractName], abi, signer);
      }
      setContracts(result);
    }
  }, [signer, networkId]);
  return contracts;
}

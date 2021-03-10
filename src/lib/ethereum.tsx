export enum EthereumNetwork {
  Main = 1,
  Xdai = 100,
  Local = 31337, // buidler node
}

export const etherscanDomains = {
  [EthereumNetwork.Main]: 'etherscan.io',
  [EthereumNetwork.Xdai]: 'blockscout.com/poa/xdai',
  [EthereumNetwork.Local]: 'etherscan.l',
};

export type ContractName = 'distribution';

export type AddressConfig = Record<EthereumNetwork, Record<ContractName, string>>;

export function getNetwork(id: EthereumNetwork): string | null {
  switch (id) {
    case EthereumNetwork.Main:
      return 'Mainnet';
    case EthereumNetwork.Xdai:
      return 'xDai';
  }
  return null;
}

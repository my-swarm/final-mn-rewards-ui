import { EthereumNetwork, AddressConfig } from './lib';

export const contractAddresses: AddressConfig = {
  [EthereumNetwork.Main]: { distribution: '0xff6B7DaA792d62d929b9F3532fC478B57c663d89' },
  [EthereumNetwork.Xdai]: { distribution: '0xDe6f5dcc1f203BF01549d74B3E3Ff61a30173A13' },
  [EthereumNetwork.Local]: { distribution: '0x0' },
};

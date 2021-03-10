import React, { ReactElement } from 'react';
import { Card } from 'antd';

export function InfoXdai(): ReactElement {
  return (
    <Card title="xDai? What?">
      <p>
        xDai is a separate Ethereum network (think a Mainnet clone) with much lower fees. We decided to distribute the
        remaining Masternode rewards on xDai because legacy distribution just won't be viable with the current gas
        prices.
      </p>
      <p>There are few things you need to know before you start:</p>
      <ul>
        <li>
          xDai works with Metamask transparently. Just follow the{' '}
          <a
            href="https://www.xdaichain.com/for-users/wallets/metamask/metamask-setup"
            target="_blank"
            rel="noreferrer noopener"
          >
            official Metamask Setup guide
          </a>
        </li>
        <li>
          The base currency on xDai network is <strong>xDai</strong> (yeah, right!). It's works the same as Ether works
          on Mainnet. With the difference that xDai is pegged to USD (which makes it a stablecoin).
        </li>
        <li>
          There are a few ways to get xDai. The best one is to use the{' '}
          <a href="https://bridge.xdaichain.com/" target="_blank" rel="noreferrer noopener">
            official bridge
          </a>{' '}
          to convert your Mainnet DAI to xDai xDai. For other ways, follow the{' '}
          <a href="https://www.xdaichain.com/for-users/get-xdai-tokens">official guide</a>.
        </li>
        <li>
          To move ERC20 tokens between Mainnet and xDai, use <a href="https://omni.xdaichain.com/">OmniBridge</a>. How
          it works is that you stake (aka lock) your token on one network and the same amount is minted on the other
          network. <strong>Same wallet address on both networks!</strong>
        </li>
      </ul>
    </Card>
  );
}

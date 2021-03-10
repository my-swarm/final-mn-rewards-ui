import React, { ReactElement } from 'react';
import { Card, Typography } from 'antd';
const { Paragraph: P, Title } = Typography;

export function Info(): ReactElement {
  return (
    <Card title="What is this?">
      <P>
        This is a one-off tool for Swarm Masternode rewards withdrawal. It works both on Mainnnet and xDai chains. Just
        switch your network in Metamask to see (and collect) your pending rewards on each network.
      </P>
      <Title level={5}>A few friendly notes:</Title>
      <ul>
        <li>
          There's no need to rush. Your rewards won't disappear. Wait for better gas prices before you collect on
          mainnet.
        </li>
        <li>
          After you collect, there's no need to come back. There's a whole new tokenomics model in the works. See the{' '}
          <a
            href="https://snapshot.page/#/swarmnetwork.eth/proposal/QmPTfjB1LPiF6WZe5m5DZpDXDdStDmBNwpdNukxSwuFJRk"
            target="_blank"
            rel="noreferrer noopener"
          >
            latest (accepted) proposal
          </a>{' '}
          and follow our{' '}
          <a href="https://t.me/swarmfund" target="_blank" rel="noreferrer noopener">
            telegram channel
          </a>{' '}
          for updates.
        </li>
        <li>
          There's no use for your masternodes anymore. Unless you use it to run other services, feel free to stop &amp;
          delete your VPS right now.
        </li>
      </ul>
    </Card>
  );
}

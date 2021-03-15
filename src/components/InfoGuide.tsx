import React, { ReactElement } from 'react';
import { Card } from 'antd';

export function InfoGuide(): ReactElement {
  return (
    <Card title="Still confused? Here's your step-by-step guide!">
      <p>Yeah, stuff can be confusing. Let's try to go step by step here:</p>
      <ol>
        <li>
          <a
            href="https://www.xdaichain.com/for-users/wallets/metamask/metamask-setup"
            target="_blank"
            rel="noreferrer noopener"
          >
            Add xDai to your MetaMask.
          </a>
          It will work the same as any other Ethereum network.
        </li>
        <li>
          Get some xDai. We have airdropped a little bit to every masternode account. If you need more, use the{' '}
          <a href="https://bridge.xdaichain.com/" target="_blank" rel="noreferrer noopener">
            official bridge
          </a>
          .
        </li>
        <li>
          Connect this app to Metamask, switch it to the xDai network and after checking your balance, click the{' '}
          <strong>Collect rewards</strong> button.
        </li>
        <li>
          Go to <a href="https://omni.xdaichain.com/">OmniBridge</a>, make sure you're still connected to xDai in
          Metamask, in the 'From' column, select the SWM token (<code>0xaB57C72BFe106E6D4f8D82BC8CAD9614cdd890Fa</code>
          ). The 'To' column will show the Mainnet token. Click the <strong>Request</strong> button. Confirm all popups.
        </li>
        <li>That's it. You now have your SWM in your Mainnet wallet</li>
      </ol>
    </Card>
  );
}

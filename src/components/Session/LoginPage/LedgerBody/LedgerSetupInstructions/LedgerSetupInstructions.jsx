import React from 'react';
import images from '../../../../../images';

export default () => (
    <div className="LoginPage_instructions">
        <p className="LoginPage__title">Setup instructions</p>
        <ol>
            <li>
                Get a Ledger device and connect it to your computer.
                <div className="LoginPage_instructions-image">
                    <img src={images['ledger-nano-s-buttons']} alt="ledger" width="409" />
                </div>
            </li>
            <li>
                Set up your Ledger device by following instructions on the Ledger site:{' '}
                <a
                    href="https://www.ledger.com/start/"
                    target="_blank"
                    rel="nofollow noopener noreferrer">
                    https://www.ledger.com/start/
                </a>
            </li>

            <li>
                Install the Ledger Live app on your computer:{' '}
                <br />
                <a href="https://shop.ledger.com/pages/ledger-live" target="_blank" rel="nofollow noopener noreferrer">
                    https://shop.ledger.com/pages/ledger-live
                </a>
            </li>

            <li>
                Inside the Ledger Live app, go to Applications and install the Stellar app.
                <br />
                <div className="LoginPage_instructions-image">
                    <img
                        src={images['ledger-app']}
                        className="img--noSelect"
                        alt="Stellar app installation inside Ledger Live"
                        width="337"
                        height="73" />
                </div>
            </li>

            <li>
                On your Ledger device, nagivate to the Stellar app and open the app.
                <br />
                <div className="LoginPage_instructions-image">
                    <img
                        src={images['ledger-nano-picture']}
                        className="img--noSelect"
                        alt="Ledger Nano Pic"
                        width="269"
                        height="121" />
                </div>
            </li>

            <li>
                Inside the app, go to <strong>Settings</strong>, then <strong>Browser support</strong>, then select{' '}
                <strong>{'"Yes"'}</strong> and press both buttons.
            </li>
        </ol>
    </div>
);

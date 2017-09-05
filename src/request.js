// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TransactionPending from '@parity/ui/Signer/TransactionPending';

import styles from './request.css';

export default class Request extends Component {
  static contextTypes = {
    api: PropTypes.object.isRequired
  };

  static propTypes = {
    className: PropTypes.string,
    date: PropTypes.instanceOf(Date).isRequired,
    focus: PropTypes.bool,
    gasLimit: PropTypes.object.isRequired,
    id: PropTypes.object.isRequired,
    isSending: PropTypes.bool.isRequired,
    netVersion: PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onReject: PropTypes.func.isRequired,
    origin: PropTypes.object.isRequired,
    payload: PropTypes.oneOfType([
      PropTypes.shape({ decrypt: PropTypes.object.isRequired }),
      PropTypes.shape({ sendTransaction: PropTypes.object.isRequired }),
      PropTypes.shape({ sign: PropTypes.object.isRequired }),
      PropTypes.shape({ signTransaction: PropTypes.object.isRequired })
    ]).isRequired,
    signerStore: PropTypes.object.isRequired
  };

  static isHandler (payload, account) {
    const isTransaction = !!(payload.sendTransaction || payload.signTransaction);
    const isExternalAccount = !!(account && account.external);

    return isTransaction && isExternalAccount;
  }

  render () {
    const { className, date, focus, gasLimit, id, isSending, netVersion, onConfirm, onReject, payload, signerStore, origin } = this.props;
    const transaction = payload.sendTransaction || payload.signTransaction;

    return (
      <div>
        <div className={ styles.hello }>
          Hello from a signer plugin
        </div>
        <TransactionPending
          className={ className }
          date={ date }
          focus={ focus }
          gasLimit={ gasLimit }
          id={ id }
          isSending={ isSending }
          netVersion={ netVersion }
          onConfirm={ onConfirm }
          onReject={ onReject }
          origin={ origin }
          signerStore={ signerStore }
          transaction={ transaction }
        />
      </div>
    );
  }
}

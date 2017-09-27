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

import React from 'react';
import PropTypes from 'prop-types';

import TransactionPending from '@parity/ui/Signer/TransactionPending';

export default function Request ({ accounts, className, date, gasLimit, isFocussed, isSending, netVersion, onConfirm, onReject, payload, origin }) {
  const transaction = payload.sendTransaction || payload.signTransaction;

  return (
    <TransactionPending
      accounts={ accounts }
      className={ className }
      date={ date }
      gasLimit={ gasLimit }
      isFocussed={ isFocussed }
      isSending={ isSending }
      netVersion={ netVersion }
      onConfirm={ onConfirm }
      onReject={ onReject }
      origin={ origin }
      transaction={ transaction }
    />
  );
}

Request.propTypes = {
  accounts: PropTypes.object.isRequired,
  className: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  gasLimit: PropTypes.object.isRequired,
  isFocussed: PropTypes.bool,
  isSending: PropTypes.bool.isRequired,
  netVersion: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
  origin: PropTypes.object.isRequired,
  payload: PropTypes.oneOfType([
    PropTypes.shape({ sendTransaction: PropTypes.object.isRequired }),
    PropTypes.shape({ signTransaction: PropTypes.object.isRequired })
  ]).isRequired
};

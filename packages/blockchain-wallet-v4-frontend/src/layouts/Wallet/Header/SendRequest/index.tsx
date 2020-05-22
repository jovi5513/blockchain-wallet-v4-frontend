import { bindActionCreators } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { includes, keys, toUpper } from 'ramda'
import React from 'react'

import { actions } from 'data'
import { getData } from './selectors'
import { ModalNamesType } from 'data/types'
import SendRequest from './template'

class SendRequestContainer extends React.PureComponent<Props> {
  showModal = type => {
    const {
      coin,
      erc20List,
      lockboxPath,
      lockboxDeviceId,
      supportedCoins
    } = this.props
    if (includes(coin, erc20List)) {
      return this.props.modalActions.showModal(
        `@MODAL.${type}.ETH` as ModalNamesType,
        {
          coin: toUpper(coin),
          origin: 'SendRequestTopNav'
        }
      )
    } else if (includes(coin, keys(supportedCoins))) {
      return this.props.modalActions.showModal(
        `@MODAL.${type}.${coin}` as ModalNamesType,
        {
          lockboxIndex: lockboxPath ? lockboxDeviceId : null,
          origin: 'SendRequestTopNav'
        }
      )
    }
    return this.props.modalActions.showModal(
      `@MODAL.${type}.BTC` as ModalNamesType,
      {
        lockboxIndex: lockboxPath ? lockboxDeviceId : null,
        origin: 'SendRequestTopNav'
      }
    )
  }

  render () {
    const { sendAvailable, requestAvailable } = this.props
    return (
      <SendRequest
        sendAvailable={sendAvailable}
        requestAvailable={requestAvailable}
        showModal={this.showModal}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  modalActions: bindActionCreators(actions.modals, dispatch)
})

const connector = connect(getData, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

export default connector(SendRequestContainer)
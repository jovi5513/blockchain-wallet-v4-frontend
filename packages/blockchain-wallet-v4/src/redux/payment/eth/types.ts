export type EthAccountFromType = {
  address: string
  balance: string
  coin: 'ETH'
  label: string
  type: 'ACCOUNT' | 'LOCKBOX'
}

export type EthAddressFromType = {
  address: string
  type: 'ADDRESS'
}

export type EthCustodialFromType = {
  available: string
  fiatAmount: null
  label: string
  pending: string
  type: 'CUSTODIAL'
}

export type EthFromType = EthAccountFromType | EthCustodialFromType
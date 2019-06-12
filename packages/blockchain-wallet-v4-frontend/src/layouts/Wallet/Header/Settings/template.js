import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import onClickOutside from 'react-onclickoutside'

import { FormattedMessage } from 'react-intl'
import { LinkContainer } from 'react-router-bootstrap'
import { transparentize } from 'polished'

import { Destination, MenuItem } from 'components/MenuLeft'
import { Icon, Link, Text } from 'blockchain-info-components'

const SettingsDropdown = styled(Link)`
  display: flex;
  align-items: center;
  position: relative;
  .icon,
  .settings {
    transition: color 0.3s;
    color: ${props => transparentize(0.3, props.theme['white'])};
  }
  &:hover {
    .icon,
    .settings {
      color: ${props => props.theme['white']};
    }
  }
`
const SettingsIcon = styled(Icon)`
  margin-right: 8px;
`
const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
  right: 0;
  z-index: 1;
  padding: 8px;
  border-radius: 8px;
  background: ${props => props.theme['white']};
  box-shadow: 0px 0px 16px rgba(18, 29, 51, 0.25);
`
const DropdownMenuItem = styled(MenuItem)`
  white-space: nowrap;
  padding: 8px 16px;
`

const Settings = props => {
  const { handleLogout } = props
  const [isMenuOpen, toggleIsMenuOpen] = useState(false)

  Settings.handleClickOutside = () => toggleIsMenuOpen(false)

  return (
    <SettingsDropdown
      onClick={() => toggleIsMenuOpen(!isMenuOpen)}
      data-e2e='logoutLink'
    >
      <SettingsIcon
        className='icon'
        name='cog-filled'
        size='18px'
        color='white'
      />
      <Text size='14px' weight={600} color='white' className='settings'>
        <FormattedMessage
          id='layouts.wallet.header.settings'
          defaultMessage='Settings'
        />
      </Text>
      {isMenuOpen && (
        <DropdownMenu>
          <LinkContainer to='/settings/general' activeClassName='active'>
            <DropdownMenuItem>
              <Destination>
                <FormattedMessage
                  id='layouts.wallet.header.general'
                  defaultMessage='General'
                />
              </Destination>
            </DropdownMenuItem>
          </LinkContainer>
          <LinkContainer to='/settings/profile' activeClassName='active'>
            <DropdownMenuItem>
              <Destination>
                <FormattedMessage
                  id='layouts.wallet.header.profile'
                  defaultMessage='Profile'
                />
              </Destination>
            </DropdownMenuItem>
          </LinkContainer>
          <LinkContainer to='/settings/preferences' activeClassName='active'>
            <DropdownMenuItem>
              <Destination>
                <FormattedMessage
                  id='layouts.wallet.header.preferences'
                  defaultMessage='Preferences'
                />
              </Destination>
            </DropdownMenuItem>
          </LinkContainer>
          <LinkContainer to='/settings/addresses' activeClassName='active'>
            <DropdownMenuItem>
              <Destination>
                <FormattedMessage
                  id='layouts.wallet.header.walletsaddresses'
                  defaultMessage='Wallets & Addresses'
                />
              </Destination>
            </DropdownMenuItem>
          </LinkContainer>
          <LinkContainer to='/security-center' activeClassName='active'>
            <DropdownMenuItem>
              <Destination>
                <FormattedMessage
                  id='layouts.wallet.header.seccenter'
                  defaultMessage='Security Center'
                />
              </Destination>
            </DropdownMenuItem>
          </LinkContainer>
          <DropdownMenuItem onClick={handleLogout}>
            <Destination>
              <FormattedMessage
                id='layouts.wallet.header.Sign Out'
                defaultMessage='Sign Out'
              />
            </Destination>
          </DropdownMenuItem>
        </DropdownMenu>
      )}
    </SettingsDropdown>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => Settings.handleClickOutside
}

Settings.propTypes = {
  handleLogout: PropTypes.func.isRequired
}

export default onClickOutside(Settings, clickOutsideConfig)
import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { Button, Image, Link, Text } from 'blockchain-info-components'

const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
`
const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`
const Content = styled.div`
  width: 300px;
  margin-left: 75px;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 35px;
  > button:first-child {
    margin-right: 20px;
  }
`

const Onboard = props => {
  const { domains, launchLockboxSetup } = props

  return (
    <Wrapper>
      <IntroContainer>
        <Image name='lockbox-welcome-safe' />
        <Content>
          <Text size='26px' weight={600}>
            <FormattedMessage
              id='scenes.lockbox.welcome.title'
              defaultMessage='Cover Your Assets'
            />
          </Text>
          <div style={{ marginTop: '25px' }}>
            <Text size='14px' weight={300}>
              <FormattedMessage
                id='scenes.lockbox.welcome.subtitle'
                defaultMessage='Lockbox works with your Blockchain Wallet to give your digital assets an additional layer of security. Unlock your Lockbox by linking your device, or buy one today.'
              />
            </Text>
            <ButtonContainer>
              <Button nature='primary' onClick={launchLockboxSetup}>
                <FormattedMessage
                  id='scenes.lockbox.welcome.connect'
                  defaultMessage='Connect'
                />
              </Button>
              <Link href={domains['comRoot'] + '/lockbox'} target='_blank'>
                <Button nature='empty-secondary'>
                  <FormattedMessage
                    id='scenes.lockbox.welcome.purchase'
                    defaultMessage='Purchase'
                  />
                </Button>
              </Link>
            </ButtonContainer>
          </div>
        </Content>
      </IntroContainer>
    </Wrapper>
  )
}

export default Onboard
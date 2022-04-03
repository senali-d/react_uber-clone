import React from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'

const Confirm = () => {
  return (
    <Wrapper>
      <Map />
      <RideContainer>
        Ride selector
        confirm Button
      </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div`
  flex flex-col h-screen
`

const RideContainer = tw.div`
  flex-1
`
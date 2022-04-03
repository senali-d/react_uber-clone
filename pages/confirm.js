import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'

const Confirm = () => {

  const [pickupCoordiantes, setPickupCoordiantes] = useState()
  const [dropoffCoordiantes, setDropoffCoordiantess] = useState()

  useEffect(() => {
    getPickupCoordiantes()
    getDropoffCoordiantes()
  }, [])

  const getPickupCoordiantes = () => {
    const pickup = "Santa Monica"
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoiemVuZGVzazk4NyIsImEiOiJjbDFpNzY0dGwwZWFxM2ZweXNjMGhxMDQ0In0.ieVpU3hBiBgEny-hzvr0QA",
        limit: 1
      })
    )
      .then(response => response.json())
      .then(data => {
        setPickupCoordiantes(data.features[0].center)
      })
  }

  const getDropoffCoordiantes = () => {
    const dropoff = "Los Angeles"
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoiemVuZGVzazk4NyIsImEiOiJjbDFpNzY0dGwwZWFxM2ZweXNjMGhxMDQ0In0.ieVpU3hBiBgEny-hzvr0QA",
        limit: 1
      })
    )
      .then(response => response.json())
      .then(data => {
        setDropoffCoordiantess(data.features[0].center)
      })
  }

  return (
    <Wrapper>
      <Map pickupCoordiantes={pickupCoordiantes} dropoffCoordiantes={dropoffCoordiantes} />
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
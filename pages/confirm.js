import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import tw from 'tailwind-styled-components'
import Map from './components/Map'

const Confirm = () => {
  const [pickupCoordiantes, setPickupCoordiantes] = useState()
  const [dropoffCoordiantes, setDropoffCoordiantess] = useState()

  const router = useRouter()
  const { pickup, dropoff } = router.query

  useEffect(() => {
    getPickupCoordiantes(pickup)
    getDropoffCoordiantes(dropoff)
  }, [pickup, dropoff])

  const getPickupCoordiantes = (pickup) => {
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

  const getDropoffCoordiantes = (dropoff) => {
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
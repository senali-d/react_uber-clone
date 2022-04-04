import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import RideSelector from './components/RideSelector'

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
      <Link href="/">
        <ButtonContainer>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </ButtonContainer>
      </Link>
      <Map pickupCoordiantes={pickupCoordiantes} dropoffCoordiantes={dropoffCoordiantes} />
      <RideContainer>
        <RideSelector />
        <ConfirmButtonContainer>
          <ConfirmButton>
            Confirm Uberx
          </ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div`
  flex flex-col h-screen
`

const ButtonContainer = tw.div`
  px-4 py-2 absolute z-10
`

const BackButton = tw.img`
  h-12 rounded-full bg-white hover:cursor-pointer
`

const RideContainer = tw.div`
  flex-1 flex flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`
  border-t-2
`

const ConfirmButton = tw.div`
  bg-black text-white m-4 px-4 py-2 text-center text-xl
`
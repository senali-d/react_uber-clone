import { useState, useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'

const accessToken = 'pk.eyJ1IjoiemVuZGVzazk4NyIsImEiOiJjbDFpNzY0dGwwZWFxM2ZweXNjMGhxMDQ0In0.ieVpU3hBiBgEny-hzvr0QA';

const RideSelector = ({ pickupCoordiantes, dropoffCoordiantes }) => {

  const [rideDuration, setRideDuraton] = useState()

  useEffect(() => {
    fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordiantes[0]},${pickupCoordiantes[1]};${dropoffCoordiantes[0]},${dropoffCoordiantes[1]}?access_token=${accessToken}`)
      .then(response => response.json())
      .then(data => {
        setRideDuraton(data.routes[0] && data.routes[0].duration / 100)
      })
  }, [pickupCoordiantes, dropoffCoordiantes])

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {
          carList.map((car, index) => (
            <Car key={index}>
              <CarImage src={car.imgUrl} />
              <CarDtails>
                <Service>{car.service}</Service>
                <Time>5 min away</Time>
              </CarDtails>
              <Price>{`$${(rideDuration * car.multiplier).toFixed(2)}`}</Price>
            </Car>
          ))
        }
      </CarList>
    </Wrapper>
  )
}

export default RideSelector

const Wrapper = tw.div`
  flex flex-col flex-1 overflow-y-scroll
`

const Title = tw.div`
  text-gray-500 text-center text-xs py-2 border-b
`

const Car = tw.div`
  flex p-4
`

const CarList = tw.div`
  overflow-y-scroll
`

const CarImage = tw.img`
  h-14 mr-4
`

const CarDtails = tw.div`
  flex-1
`

const Service = tw.div`
  font-medium
`

const Time = tw.div`
  text-xs text-blue-500
`

const Price = tw.div`
  text-sm
`
import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import tw from 'tailwind-styled-components'

mapboxgl.accessToken = 'pk.eyJ1IjoiemVuZGVzazk4NyIsImEiOiJjbDFpNzY0dGwwZWFxM2ZweXNjMGhxMDQ0In0.ieVpU3hBiBgEny-hzvr0QA';

const Map = () => {

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3
    });
  });

  return (
    <Wrapper id="map">
    </Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
  flex-1
`
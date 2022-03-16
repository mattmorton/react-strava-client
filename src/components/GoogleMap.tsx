import { Status, Wrapper } from '@googlemaps/react-wrapper';
import React, { ReactElement, useEffect, useRef, useState } from 'react'

const render = (status: Status): ReactElement => {
  console.log({ status })
  return <div style={{ height: "500px", width: "100%" }}></div>
};

const GoogleMap = (props: { center: google.maps.LatLngLiteral, zoom: number }) => {

  const { center, zoom } = props;
  const componentRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (componentRef.current && !map) {
      setMap(new window.google.maps.Map(componentRef.current, { center, zoom }))
    }
  }, [componentRef, map, center, zoom])

  return (
    <div style={{ height: "500px", width: "100%" }} ref={componentRef} id="map"></div>
  )
}

const WrappedGoogleMap = (props: { center: google.maps.LatLngLiteral, zoom: number }) => {
  const { center, zoom } = props;
  return (
    <Wrapper apiKey='API_KEY' render={render}>
      <GoogleMap center={center} zoom={zoom}></GoogleMap>
    </Wrapper>
  )
}

export default WrappedGoogleMap
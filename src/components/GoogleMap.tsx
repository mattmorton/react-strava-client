import { Status, Wrapper } from '@googlemaps/react-wrapper';
import React, { ReactElement, useContext, useEffect, useRef, useState } from 'react'
import { useSettings } from '../hooks/useSettings';

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
      setMap(new window.google.maps.Map(componentRef.current, { center, zoom, mapTypeId: 'roadmap', zoomControl: false, mapTypeControl: false, streetViewControl: false }))
    }
  }, [componentRef, map, center, zoom])

  return (
    <div style={{ height: "500px", width: "100%" }} ref={componentRef} id="map"></div>
  )
}

const WrappedGoogleMap = (props: { center: google.maps.LatLngLiteral, zoom: number }) => {
  const { center, zoom } = props;
  const context = useSettings();
  return (
    <Wrapper apiKey={context.googleApiKey} render={render}>
      <GoogleMap center={center} zoom={zoom} ></GoogleMap>
    </Wrapper>
  )
}

export default WrappedGoogleMap
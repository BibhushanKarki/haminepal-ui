import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './index.css';

const MapContainer = (props) => {
    const { center, handleMyLocationChange, apiKey } = props;
    const defaultProps = {
        center: {
            lat: 26.45505,
            lng: 87.27007
        },
        zoom: 10
    };
    const [centerCoords, setCenterCoords] = useState(defaultProps.center);
    const [myLocation, setMyLocation] = useState(null);

    useEffect(() => {
        setCenterCoords(center);
        setMyLocation(center);
    }, [center])

    const handleMapClick = ({ lat, lng }) => {
        setMyLocation({ lat, lng });
        handleMyLocationChange({ lat, lng })
    }

    return (
        <div style={{ height: '400px', width: '100%' }}>
            <GoogleMapReact
                onClick={handleMapClick}
                bootstrapURLKeys={{
                    key: apiKey
                }}
                center={centerCoords}
                defaultZoom={defaultProps.zoom}
            >
                {myLocation && JSON.stringify(center) !== '{}' ? <Marker lat={myLocation.lat} lng={myLocation.lng} /> : ''}
            </GoogleMapReact>
        </div>
    );
}
const Marker = () => {
    const markerStyle = {
        borderRadius: 15,
        background: '#15222b',
        color: 'white',
        width: 105,
        padding: '5px 5px',
        transform: 'translate(15px, -50%)'
    };
    return <div style={markerStyle} id="google-map-marker"><img src="/assets/img/logo-only.png" height="30px" width="30px" alt="" class="img-fluid"></img> My Location</div>;
}

export default MapContainer;
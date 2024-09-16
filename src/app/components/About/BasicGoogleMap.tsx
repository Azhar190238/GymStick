"use client";

import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '450px',
};

const defaultCenter = {
    lat: 40.712776,
    lng: -74.005974,
};

const BasicGoogleMap: React.FC = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    });

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <section className="relative w-full h-[450px] mt-24">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={defaultCenter}
                zoom={12}
            >
            </GoogleMap>
        </section>
    );
};

export default BasicGoogleMap;

import { useEffect, useState } from "react";
import type { locationData } from "../types";
import LocationPreview from "./LocationPreview";

export default function LocationListContent() {
    // set state to store location data
    const [locationData, setLocationData] = useState<locationData>();

    useEffect(()=>{
        // fetch api
        async function fetchLocationData(){
            const res = await fetch(
                `https://api.ipquery.io/?format=json`,
            );
        // parse json response
        const jsonRes = await res.json();
        // set location data
        setLocationData({
            ip: jsonRes.ip,
            country: jsonRes.location.country,
            city: jsonRes.location.city,
            state: jsonRes.location.state,
            is_vpn: jsonRes.risk.is_vpn,
        });
    }
    fetchLocationData().catch((e) => console.error(e));
    }, []);

    return (
        <div>
            {locationData && <LocationPreview locationData={locationData} />}
        </div>
    )
}; 
import { useEffect, useState } from "react";
import type { locationData } from "../types";
import LocationPreview from "./LocationPreview";

export default function LocationListContent() {
    // set state to store location data
    const [locationData, setLocationData] = useState<locationData>();

    useEffect(()=>{
        async function fetchLocationData(){
            const res = await fetch(
                `https://api.ipquery.io/?format=json`,
            );
        const jsonRes = await res.json();
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
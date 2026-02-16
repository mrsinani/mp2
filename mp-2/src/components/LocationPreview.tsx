import styled from "styled-components";
import type { locationData } from "../types";

const LocationPreviewDiv = styled.div`
    font-family: Comic Sans MS, Comic Sans, cursive;
    align-items: center;
    text-align: center;
`

export default function LocationPreview({locationData}: {locationData: locationData}) {
    return (
        <LocationPreviewDiv>
            <h2>Your Location and IP Data:</h2>
            <p>IP Address: {locationData.ip}</p>
            <p>Country: {locationData.country}</p>
            <p>City: {locationData.city}</p>
            <p>State: {locationData.state}</p>
            <p>Is VPN: {locationData.is_vpn ? "Yes" : "No"}</p>
        </LocationPreviewDiv>
    )
}
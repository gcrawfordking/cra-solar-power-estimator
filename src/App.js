import React, { useCallback, useEffect, useState } from "react";
import MapContainer from "./MapContainer";
import LocationSearchInput from "./PlacesAutocomplete";
import "./App.css";


function App() {

    // const [ apiResponse, setApiResponse] = useState("");

    // const callAPI = useCallback(() => {
    //     fetch("http://localhost:9000/testAPI")
    //         .then(res => res.text())
    //         .then(res => setApiResponse(res))
    //         .catch(err => err);
    // }, []);

    // useEffect(callAPI, [callAPI]);

    const [ latLongResponse, setLatLongResponse ] = useState(null);
    const [ zoomLevel, setZoomLevel ] = useState(7);

    useEffect(() => {
        if (latLongResponse) {
            setZoomLevel(19);
        }
    }, [latLongResponse])

    console.log("resp", latLongResponse)

        return (
            <div className="container" >
                {/* <p className="App-intro">{apiResponse}</p> */}
                <h2>Solar Power Estimator</h2>
                <LocationSearchInput setLatLongResponse={setLatLongResponse} />
                <MapContainer latLongResponse={latLongResponse} zoomLevel={zoomLevel}/>
            </div>
        );
}

export default App;

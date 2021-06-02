import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from "react";
 
export class MapContainer extends Component {
  static defaultProps = {
    latLongResponse: {
      lat: 40.854885,
      lng: -88.081807
    }
  };

  
  render() {
    const { google, latLongResponse, zoomLevel}  = this.props;
    const innerStyle = {position: "relative", width: "100%", height: "100%"};
    const containerStyle = {position: "relative", width: "100%", height: "calc(100vh - 120px)"};

    return (
      <Map 
        google={google}
        zoom={zoomLevel}
        containerStyle={containerStyle}
        initialCenter={{
            lat: 42.3601,
            lng: -71.0589
          }}
        center={latLongResponse}  
        style={innerStyle}
        mapTypeControl={true}
        // yesIWantToUseGoogleMapApiInternals={true}
        // onGoogleApiLoaded={({ map, google }) => this.handleApiLoaded(map, google)}
        >
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
    );
  }
}
 
//export default MapContainer
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)
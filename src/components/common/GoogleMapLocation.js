import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = () => {
  const defaultProps = {
    center: {
      lat: 6.9356,
      lng: 79.8466,
    },
    zoom: 15,
  };

  return (
    <>
      <div style={{ height: "40vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{}}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
              >
                  <AnyReactComponent lat={6.9356} lng={79.8466} />

        </GoogleMapReact>
        
      </div>
    </>
  );
};

export default SimpleMap;

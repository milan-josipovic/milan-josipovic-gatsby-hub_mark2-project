import React from "react"
import PropTypes from "prop-types"
import { Map, TileLayer, Marker, Popup, Tooltip } from "react-leaflet"
import "./leafletmap.css"
import styles from "../../css/map.module.css"
import Info from "../Home/Info"

class LeafletMap extends React.Component {
  static propTypes = {
    /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
    position: PropTypes.array,

    /** Initial zoom level for the map (default 13) **/
    zoom: PropTypes.number,

    /** If set, will display a marker, which when clicked will display this text **/
    markerText: PropTypes.string,
  }

  static defaultProps = {
    position: [51, -1],
    zoom: 13,
    markerText: "",
  }

  render() {
    return (
      <div className={styles.main}>
        <div className={styles.mapSection}>
          <Map center={this.props.position} zoom={this.props.zoom}>
            <TileLayer
              url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {this.props.markerText !== "" && (
              <Marker position={this.props.position}>
                <Popup>
                  {/* {this.props.markerText} */}
                  <h4>RIS Hub Užice</h4>
                  <a
                    href="https://goo.gl/maps/eZY2QuYWvvi8gd4DA"
                    target="_blank"
                  >
                    pronađite rutu do RIS-a na Google Maps
                  </a>
                </Popup>
                {/* <Tooltip>{this.props.markerText}</Tooltip> */}
              </Marker>
            )}
          </Map>
        </div>
        <div className={styles.infoContainer}>
          <Info />
        </div>
      </div>
    )
  }
}

export default LeafletMap

import * as React from 'react';
import * as L from 'leaflet';

export class Map extends React.Component {
  map = React.createRef();
  LMap = null;

  componentDidMount() {
    this.LMap = L.map(this.map.current);
    this.LMap.setView([51.505, -0.09], 13);

    L.polygon([
      [51.05, -0.08],
      [51.5, -0.06],
      [51., -0.05],
    ]).addTo(this.LMap);
    this.LMap.getZoom()
  }

  render() {
    return (
      <div ref={this.map} style={{height: 180}}></div>
    );
  }
}
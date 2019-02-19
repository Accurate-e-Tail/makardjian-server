import React from 'react';

class MainPhoto extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      x: 0,
      y: 0,
    }
  }

  setCoords (event) {
    const x = event.clientX;
    const y = event.clientY;
    if (100 < x && x < 425) {
      this.setState({
        x: -x + 100,
      })
    }
    if (200 < y && y < 600) {
      this.setState({
        y: -y + 200,
      })
    }
  }

  render() {
    if (!this.props.showZoomBox) {
      return (
        <React.Fragment>
          <div id="mk-main-photo-wrapper">
            <img id='mk-main-img' src={this.props.mainPhoto.main_url} alt="mainPhoto" 
              onMouseEnter={ () => {this.props.displayZoomBox()} }
              onMouseMove={ (e) => { this.setCoords(e) }}
            />
          </div>
          <div>
            <span id='mk-main-photo-caption'>
              Roll over image to zoom in
            </span>
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <div id="mk-main-photo-wrapper">
            <img id='mk-main-img' src={this.props.mainPhoto.main_url} alt="mainPhoto" 
              onMouseLeave={ () => {this.props.displayZoomBox()} }
              onMouseMove={ (e) => { this.setCoords(e) }}
            />
          </div>
          <div id='mk-zoom-box'>
            <img id='mk-zoom-img' src={this.props.mainPhoto.zoom_url}
            style={{left: this.state.x, top: this.state.y}}/>
          </div>
          <div>
            <span id='mk-main-photo-caption'>
              Roll over image to zoom in
            </span>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default MainPhoto;

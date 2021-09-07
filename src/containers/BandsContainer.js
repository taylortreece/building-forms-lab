import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput.js';

class BandsContainer extends Component {
  render() {
    return(
      <ul>
        <BandInput addBand={this.props.addBand} />
        {this.props.bands.map(band => (<li key={band.name}>{band.name}</li>))}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  debugger
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (band) => dispatch(band)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

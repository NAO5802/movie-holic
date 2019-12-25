import React from "react"
import PropTypes from "prop-types"

class Player extends React.Component {

  render () {

    return (
      <React.Fragment>
        <div class="player--on">
          <div class="show-top__movie">
            <iframe width="100%" height="100%" src={this.props.video.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="show-top__title">
            {this.props.title}
          </div>
          <div class="show-top__sumarry">
            <p>{this.props.sumarry}</p>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Player
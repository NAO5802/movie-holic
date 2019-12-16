import React from "react"
import PropTypes from "prop-types"
class Child extends React.Component {
    constructor(props) {
      super(props);
      this.func = this.func.bind(this);
  }

  func(){
    this.props.setTest('new value')
  }

  render () {
    return (
      <React.Fragment>
        <div onClick={this.func}>btn</div>
      </React.Fragment>
    );
  }
}

export default Child

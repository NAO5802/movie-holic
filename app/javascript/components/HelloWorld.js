import React from "react"
import PropTypes from "prop-types"
import Child from "./Child"
class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: ""};
    this.setTest = this.setTest.bind(this)
  }
    setTest(value) {
      this.setState({test: value})
    }
  
  
  

  render () {

    let test = this.state.test
    return (
      <React.Fragment>
        <Child
          setTest={this.setTest}
        />
        <p>test変数：　{test}</p>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld

import React from "react"
import PropTypes from "prop-types"
import MenuContents from "./MenuContents"


class Menu extends React.Component {

    constructor(props) {
      super(props);
      this.state={isMenuListOpen: false};
    }

    handleMouseEnter(){
      this.setState({isMenuListOpen: true});
    }

    handleMouseLeave(){
      this.setState({isMenuListOpen: false});
    }



  render () {

    let menu;

    if (this.state.isMenuListOpen){
      menu = (< MenuContents/>);
    }

    return (
      <React.Fragment>
              <div className="menu-icon">
                <i className="fa fa-bars"
                    onMouseEnter={() => {this.handleMouseEnter()}} 
                    ></i>
              </div>
              <div className="menu-open"
                    onMouseLeave={() => {this.handleMouseLeave()}} 
                    >
              {menu}
              </div>
            


      </React.Fragment>
    );


  }
}

export default Menu

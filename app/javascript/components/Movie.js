import React from "react"
import PropTypes from "prop-types"


class Movie extends React.Component {

  constructor(props) {
    super(props);
    this.state={isModalOpen: false};
    this.playerOn = this.playerOn.bind(this);
  }

  playerOn(){
    this.props.setPlayer(true)
  }



  handleClickMovie(){
    this.setState({isModalOpen: true});
  }
  handleClickClose(){
    this.setState({isModalOpen: false});
  }



  render () {
    let modal;

    if(this.state.isModalOpen){
      modal = (<div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>{this.props.name}</h2>
              <p>{this.props.summary}</p>
            </div>
            <button 
              className='modal-move-btn'
              onClick={this.playerOn}
              // onClick={() => {this.handleClickClose();}}
            >
              この映画をみる
            </button>
            <button 
              className='modal-close-btn'
              onClick={() => {this.handleClickClose();}}
            >
              とじる
            </button>
          </div>
        </div>
        );
    }


    return (
      <React.Fragment>


        <div className='movie-card'>
        <div className='movie-item'
            onClick={() => {this.handleClickMovie()}}
        >

          <img src={this.props.image} />
        </div>

        {modal}
        
      </div>
      </React.Fragment>
    );
  }
}

export default Movie

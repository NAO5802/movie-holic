import React from "react"
import PropTypes from "prop-types"
import Slider from "react-slick";

class TopImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render () {
    const main_settings = {
      arrows: false,
      fade: true,
    };

    const sub_settings = {
      arrows: false,
      slidesToShow: 7,
      focusOnSelect: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          }          
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          }
        }
      ],
    };

    const mains = this.props.images.map((image) => {
      return <div><img src={image.url} className="main-image" /></div>
    });

    const subs = this.props.images.map((image) => {
      return <div className="sub-slide"><img src={image.url} className="sub-image"/></div>
    });


    return (
      <React.Fragment>
        <Slider
          {...main_settings}
          ref={slider => (this.slider1 = slider)}
          >
          {mains}
        </Slider>

        <Slider
          {...sub_settings}
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          >
          {subs}
        </Slider>

      </React.Fragment>
    );
  }
}

export default TopImage

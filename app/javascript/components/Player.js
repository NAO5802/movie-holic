import React from "react"
import PropTypes from "prop-types"

class Player extends React.Component {

    constructor(props) {
    super(props);
    this.state= (this.props.player_state);
  }

  playerOn(){
    this.setState({isPlayerOn: true});
  }

  playerOff(){
    this.setState({isPlayerOn: false});
  }



  render () {
    let player_on;
    let player_off;

    if(this.state.isPlayerOn){
      player_on = (<div class="player--on">
                    <div class="top-contents__movie">
                      <iframe width="640" height="360" src="https://www.youtube.com/embed/GMKxBGPhfQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="top-contents__sumarry">
                      <p>新たな持ち主ボニーを見守るウッディ、バズらの前に現れたのは、ボニーのお気に入りで手作りおもちゃのフォーキー。彼は自分をゴミだと思い込み逃げ出してしまう…。フォーキーを救おうと旅にでたウッディやバズたちはピンチに！運命的な出会い、スリルあふれる冒険を経て、ウッディが目にする新たな世界とは？ウッディやおなじみの仲間たちの新たな旅立ちと冒険を描く「トイ・ストーリー」史上最大の感動のアドベンチャー。</p>
                    </div>
                  </div>
                );

      player_off = ""


    } else{
      player_on = ""

      player_off = (<div class="player--off">
                        <p>Let's choose movie from below!</p>
                      </div>
                  );
    }


    return (
      <React.Fragment>
        <div class="top-contents">
          <div class="top-contents__elements">
            <h1 class="top-contents__elements--caption">再生中</h1>
            {player_on}
            {player_off}
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Player
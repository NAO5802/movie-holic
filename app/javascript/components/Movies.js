import React from "react"
import Movie from "./Movie"

class Movies extends React.Component {

  render () {
    
    return (
      <React.Fragment>

        <div class="low-contents">
          <div class="low-contents__elements">
          <h1 class="low-contents__elements--caption">Let's choose movie from below!</h1>
            <p>
              <Movie/>
              </p>
          </div>
        </div>
        
      </React.Fragment>
    );
  }
}

export default Movies








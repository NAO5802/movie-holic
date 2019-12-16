import React from "react"
import PropTypes from "prop-types"
class MenuContents extends React.Component {


  render () {


    return (
      <React.Fragment>
        <div class="menu-card">
          <h1 class="menu-card__head">MENU</h1>
          <ul class="menu-card__list">
            <li>お気に入り</li>
            <li>タイムライン</li>
            <li>ユーザー設定</li>
          </ul>
        </div>
        

      </React.Fragment>
    );
  }


}

export default MenuContents

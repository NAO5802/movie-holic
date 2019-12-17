import React from "react"
import PropTypes from "prop-types"
class MenuContents extends React.Component {


  render () {


    return (
      <React.Fragment>
        <div class="menu-card">
          <h1 class="menu-card__head">MENU</h1>
          <ul class="menu-card__list">
            <li><a href="/users/edit" >ユーザー情報編集</a></li>
            <li><a href="/users/sign_out" data-method="delete" >ログアウト</a></li>
          </ul>
        </div>
        

      </React.Fragment>
    );
  }


}

export default MenuContents

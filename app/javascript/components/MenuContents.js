import React from "react"
import PropTypes from "prop-types"
class MenuContents extends React.Component {


  render () {


    return (
      <React.Fragment>
        <div class="menu-card">
          <ul class="menu-card__list">
            <li><a href="/users/edit" class="menu-link">ユーザー情報編集</a></li>
            <li><a href="/users/sign_out" data-method="delete" class="menu-link">ログアウト</a></li>
          </ul>
        </div>
        

      </React.Fragment>
    );
  }


}

export default MenuContents

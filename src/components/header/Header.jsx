import React from "react";
import s from './Header.module.scss'
import {connect} from "react-redux";
import {authMeTC} from "../../redux/auth";




class Header extends React.Component {
    componentDidMount() {
        this.props.getAuthMeData()
    }
    render() {
      return(
          <header className={s.header}>
              <div className={s.header__logo}>LOGO</div>
              {
                  !this.props.isAuth
                      ? <div>login</div>
                      : <div>{this.props.authData.login}</div>
              }
          </header>
      );
  }
}
const mapStateToProps = (state)=> {
    return {
        isAuth: state.auth.isAuth,
        authData: state.auth.authData
    }
}



const mapDispatchToProps = (dispatch)=> {
    return {
        getAuthMeData: () => {
            dispatch(authMeTC())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
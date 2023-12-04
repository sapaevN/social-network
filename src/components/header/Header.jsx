import React from "react";
import s from './Header.module.scss'
import {connect} from "react-redux";
import {authMeTC, logOutTC} from "../../redux/auth";
import {NavLink} from "react-router-dom";




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
                      ? <NavLink to={"/login"}> <div>login</div> </NavLink>
                      : <div> <span>{this.props.authData.login}</span>
                          <a className={s.logout} href={"#"} onClick={()=>{this.props.logout()}}>logout</a>
                      </div>
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
        },
        logout: () =>{
            dispatch(logOutTC())
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
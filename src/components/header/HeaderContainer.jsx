import React from "react";

import {connect} from "react-redux";
import Header from "./Header";
import {authMeTC, setAuthUserDataAC} from "../../redux/auth-reducer";
import axios from "axios";
import {authAPI, userAPI} from "../../dal/api";

class HeaderContainer extends  React.Component{

    componentDidMount() {
       this.props.authMe()
    }

    render(){
        return <Header {...this.props}/>;
    }
}
const mapStateToProps = (state)=>(
    {
        login:state.auth.authData.login,
        isAuth:state.auth.isAuth
    })
const mapDispatchToProps = (dispatch)=>(
    {
        setAuthUserData:(data)=>{
            dispatch(setAuthUserDataAC(data))
        },
        authMe:()=>{
            dispatch(authMeTC())
        }

    })
export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)
import React from "react";
import {Navigate} from "react-router-dom";

const withAuthNavigate = (Component) =>{

    return class extends React.Component{
        render() {

            if (!this.props.isAuth) return <Navigate to="/login"/>
            return <Component {...this.props}/>
        }
    }
}

export default withAuthNavigate



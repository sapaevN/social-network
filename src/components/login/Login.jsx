import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators";
import {Input} from "../commons/formsControls/FormsControls";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth";
import {Navigate} from "react-router-dom";
import s from "./Login.module.scss"

const Form = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)

        props.login(formData.email,formData.password,formData.rememberMe)
    }
    if(props.isAuth) return <Navigate to={"/profile"}/>
    return (<>
            <h1> Login Form</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>)
}

const LoginForm = (props ) => {

    return (<div>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder="email" name="email" component={Input} validate={[required]} type="email"
                /></div>
                <div><Field placeholder="password" name="password" component={Input} validate={[required]} type="password"/></div>
                <div><Field component={'input'} name="rememberMe" type="checkbox"/> remember me</div>
                {props.error && <div className={s.error}> {props.error}</div>}
               <div> <button type={"submit"}>Submit</button></div>
            </form>
        </div>)
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapDispatchToProps = (dispatch) => {
    return{
        login: (email,password,rememberME = false) =>{
            dispatch(loginTC(email,password,rememberME))
        }
    }
}
const mapStateToProps =(state)=>{
    return{
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form)

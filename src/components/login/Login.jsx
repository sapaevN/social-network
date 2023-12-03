import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators";
import {Input} from "../commons/formsControls/FormsControls";


const Form = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (<>
            <h1> Login Form</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>)
}

const LoginForm = (props) => {

    return (<div>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder="login" name="login" component={Input} validate={[required]} type="text"
                /></div>
                <div><Field placeholder="password" name="password" component={Input} validate={[required]} type="password"/></div>
                <div><Field component={'input'} name="rememberMe" type="checkbox"/> remember me</div>
                <button type={"submit"}>Submit</button>
            </form>
        </div>)
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
export default Form

import React from "react";
import s from "./Dialogs.module.scss"
import DialogsItem from "./dialogsItem/DialogsItem";
import Message from "./message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator,required} from "../../utils/validators";
import {Textarea} from "../commons/formsControls/FormsControls";

const maxLength = maxLengthCreator(10)
let AddDialogsText = (props)=>{

    return (
        <form onSubmit={props.handleSubmit} className={s.inputBlock}>
            <Field
                name="text"
                component={"textarea"}
                placeholder={"enter your text"}
            />
            <button type="submit" >send</button>
        </form>
    )
}
AddDialogsText = reduxForm({form:"addDialogsMessage"})(AddDialogsText)
const Dialogs = (props)=>{

    const dialogsElements = props.dialogsData.map((element) =>{
        return  <DialogsItem name={element.name} path={element.path}/>
    })
    const messageElements = props.messagesData.map(message=>{
        return  <Message message={message.message}/>
    })
    const addNewText = (textBody) =>{
        props.addMessage(textBody.text)
    }


    return(
        <div className={s.dialogs}>

            <div className={s.dialogs__block}>
                <div className={s.dialogs__title}>Dialogs</div>
                <ul className={s.dialogs__items}>
                    {dialogsElements}
                </ul>
                <div className={`${s.dialogs__chat} ${s.chat}`}>
                    {messageElements}
                </div>

               <AddDialogsText onSubmit={addNewText}/>
            </div>

        </div>
    )
}

export default Dialogs
import React from "react";
import s from "./Dialogs.module.scss"
import DialogsItem from "./dialogsItem/DialogsItem";
import Message from "./message/Message";
import dialogsItem from "./dialogsItem/DialogsItem";
import {changeDialogInputAC, addMessageAC} from "../../redux/reducers/dialogsPage-reducer";



const Dialogs = (props)=>{


    let newText = React.createRef()

    const addNewText = () =>{
        props.onAddNewText()
        newText.current.value = ''
    }
    const changeDialogInput = ()=>{
        let value = newText.current.value
        props.onChangeDialogInput(value)
    }

    return(
        <div className={s.dialogs}>

            <div className={s.dialogs__block}>
                <div className={s.dialogs__title}>Dialogs</div>
                <ul className={s.dialogs__items}>
                    {props.dialogsElements}
                </ul>
                <div className={`${s.dialogs__chat} ${s.chat}`}>
                    {props.messageElements}
                </div>

                <div className={s.inputBlock}>
                    <textarea ref={newText} onChange={changeDialogInput} value={props.newInputValue}> </textarea>
                    <button type="button" onClick={addNewText}>send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs
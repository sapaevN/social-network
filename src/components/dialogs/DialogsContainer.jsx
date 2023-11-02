import React from "react";
import DialogsItem from "./dialogsItem/DialogsItem";
import Message from "./message/Message";
import dialogsItem from "./dialogsItem/DialogsItem";
import {changeDialogInputAC, addMessageAC} from "../../redux/reducers/dialogsPage-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../redux/StoreContext";



const DialogsContainer = (props) => {

    return( <StoreContext.Consumer>
        {(store)=>{
            const dialogsElements = store.getState().dialogsPage.dialogsData.map((element) => {
                return <DialogsItem name={element.name} path={element.path}/>
            })
            const messageElements = store.getState().dialogsPage.messagesData.map(message => {
                return <Message message={message.message}/>
            })

            const addNewText = () => {
                let action = addMessageAC()
                store.dispatch(action)
            }
            const changeDialogInput = (value) => {
                let action = changeDialogInputAC(value)
                store.dispatch(action)
            }

            return <Dialogs
                onAddNewText={addNewText}
                onChangeDialogInput={changeDialogInput}
                dialogsElements={dialogsElements}
                messageElements={messageElements}
                newInputValue={store.getState().dialogsPage.newInputValue}
            />
        }}

    </StoreContext.Consumer>
    )

}

export default DialogsContainer
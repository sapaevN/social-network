import {json} from "react-router-dom";

const CHANGE_DIALOG_INPUT = "CHANGE-DIALOG-INPUT"
const ADD_MESSAGE = "ADD-MESSAGE"

let initialState = {
    dialogsData: [
        {id: 1, path: "/dialogs/1", name: "Nuriddin"},
        {id: 2, path: "/dialogs/2", name: "sofia"},
        {id: 3, path: "/dialogs/3", name: "Mirshax"},
        {id: 4, path: "/dialogs/4", name: "Fazlddin"},
        {id: 5, path: "/dialogs/5", name: "Salahaddin"},
    ],
    messagesData: [
        {id: 1, message: "some message"},
        {id: 2, message: "Hello"},
        {id: 3, message: "Yo"},
        {id: 4, message: "YOYOY"},

    ],
    newInputValue: ""
}

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state))
    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            id: 5,
            message: state.newInputValue
        }
        stateCopy.messagesData.push(newMessage)
        stateCopy.newInputValue = ''
    } else if (action.type === CHANGE_DIALOG_INPUT) {
            stateCopy.newInputValue = action.newText
    }
    return stateCopy
}


export const changeDialogInputAC = (newText) => ({type: CHANGE_DIALOG_INPUT, newText: newText})
export const addMessageAC = () => ({type: ADD_MESSAGE})
export default dialogsReducer
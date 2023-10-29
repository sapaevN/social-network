const CHANGE_DIALOG_INPUT = "CHANGE-DIALOG-INPUT"
const ADD_MESSAGE = "ADD-MESSAGE"

const dialogsPageReducer = (state,action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message:state.newInputValue
            }
            state.messagesData.push(newMessage)
            state.newInputValue = ''
            return state
        case CHANGE_DIALOG_INPUT:
            state.newInputValue = action.newText
            return state
        default:
            return state
    }
}

export default dialogsPageReducer
export const changeDialogInputAC = (newText)  =>({type:CHANGE_DIALOG_INPUT,newText:newText})
export const addMessageAC = () => ({type:ADD_MESSAGE})

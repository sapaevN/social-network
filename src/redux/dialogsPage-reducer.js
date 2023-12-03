
const ADD_MESSAGE = "ADD-MESSAGE"


const initialState = {
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

}

 const dialogsPageReducer = (state = initialState,action) => {

    const stateCopy = JSON.parse(JSON.stringify(state))

    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: action.text
            }
            stateCopy.messagesData.push(newMessage)
            stateCopy.newInputValue = ''
            return stateCopy
        default:
            return stateCopy
    }
}

export default dialogsPageReducer
export const addMessageAC = (text) => ({type:ADD_MESSAGE,text})

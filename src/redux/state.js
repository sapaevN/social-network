import dialogsPageReducer from "./reducers/dialogsPage-reducer";
import profilePageReducer from "./reducers/profilesPage-reducer";


export const store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, likesCount: "123", message: "some message"},
                {id: 2, likesCount: "123", message: "hello"},
            ],
            postInputValue: ''
        },
        dialogsPage: {
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
            newInputValue:""
        },
        friendsPage:{}
    },
    _callsubscriber(){},
    getState(){
        return this._state
    },

    subscribe(observer) {
        this._callsubscriber = observer
    },

    dispatch(action){

        this._state.dialogsPage = dialogsPageReducer( this._state.dialogsPage,action)
        this._state.profilePage = profilePageReducer( this._state.profilePage,action)

        this._callsubscriber()
    }
}





export default store
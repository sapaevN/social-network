import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsPageReducer from "./dialogsPage-reducer";
import profilesPageReducer from "./profilesPage-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilesPageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})


let store = createStore(reducers, applyMiddleware(thunk));

export default store

window.store = store
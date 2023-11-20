import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsPageReducer from "./dialogsPage-reducer";
import profilesPageReducer from "./profilesPage-reducer";
import usersReducer from "./users-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    dialogsPage:dialogsPageReducer,
    profilePage:profilesPageReducer,
    usersPage:usersReducer,
})


let store = createStore(reducers, applyMiddleware(thunk));

export default store
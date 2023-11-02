
import { combineReducers,createStore} from 'redux';
import profilePageReducer from "./reducers/profilesPage-reducer";
import dialogsPageReducer from "./reducers/dialogsPage-reducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer
})



const store = createStore(reducers);

export default store;
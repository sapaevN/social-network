

import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {compose} from "redux";
import withAuthNavigate from "../../hoc/withAuthNavigate";
import {addMessageAC} from "../../redux/dialogsPage-reducer";


const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData:state.dialogsPage.messagesData,
        isAuth:state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage:(text)=>{
            dispatch(addMessageAC(text))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthNavigate)(Dialogs)


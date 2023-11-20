
import {changeDialogInputAC, addMessageAC} from "../../redux/dialogsPage-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";


const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData:state.dialogsPage.messagesData,
        newInputValue:state.dialogsPage.newInputValue
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage:()=>{
            dispatch(addMessageAC())
        },
        changeDialogInput:(value)=>{
            dispatch(changeDialogInputAC(value))
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
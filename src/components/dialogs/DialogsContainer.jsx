
import {changeDialogInputAC, addMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";




let mapStateToProps = (state)=>{
    return{
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        onAddNewText:()=>{
            let action = addMessageAC()
            dispatch(action)
        },
        onChangeDialogInput:(value)=>{
            let action = changeDialogInputAC(value)
            dispatch(action)}
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)


export default DialogsContainer
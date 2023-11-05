import {addPostAC, onChangeInputValueAC} from "../../../redux/profile-reducer"
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state)=>{
    return{
        profilePage:state.profilePage
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        addPost: ()=>{
            const action = addPostAC()
            dispatch(action)
        },
        newPostInputValue:(newValue)=>{
            const action = onChangeInputValueAC(newValue)
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer
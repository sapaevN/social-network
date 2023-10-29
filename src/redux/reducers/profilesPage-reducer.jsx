const ADD_POST = "ADD-POST"
const ON_CHANGE_POST_INPUT_VALUE = "ON-CHANGE-POST-INPUT-VALUE"

const profilePageReducer = (state, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 7,
                likesCount: "123",
                message: state.postInputValue
            }
            state.postsData.push(newPost)
            state.postInputValue = ''
            return state
        case ON_CHANGE_POST_INPUT_VALUE:
            state.postInputValue = action.newValue
            return state
        default:
            return state;
    }
}

export default profilePageReducer

export const addPostAC = () => ({type:ADD_POST})
export const onChangeInputValueAC = (newValue) => ({type:ON_CHANGE_POST_INPUT_VALUE, newValue:newValue})
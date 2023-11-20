const ADD_POST = "ADD-POST"
const ON_CHANGE_POST_INPUT_VALUE = "ON-CHANGE-POST-INPUT-VALUE"


const initialState = {
    postsData: [
        {id: 1, likesCount: "123", message: "some message"},
        {id: 2, likesCount: "123", message: "hello"},
    ],
    postInputValue: ''
}



const profilePageReducer = (state = initialState, action) => {
    const stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 7,
                likesCount: "123",
                message: stateCopy.postInputValue
            }
            stateCopy.postsData.push(newPost)
            stateCopy.postInputValue = ''
            return stateCopy
        case ON_CHANGE_POST_INPUT_VALUE:
            stateCopy.postInputValue = action.newValue
            return stateCopy
        default:
            return stateCopy;
    }
}

export default profilePageReducer
export const addPostAC = () => ({type:ADD_POST})
export const onChangeInputValueAC = (newValue) => ({type:ON_CHANGE_POST_INPUT_VALUE, newValue:newValue})
const playgroundReducerDefaultState = [];

const playgroundReducer = (state = playgroundReducerDefaultState, action) => {
    switch(action.type){
        case 'INSERT': {
            state.length = 0;
            return [...state, ...action.data]
        }
        default:
            return state;
    }
}

export default playgroundReducer;
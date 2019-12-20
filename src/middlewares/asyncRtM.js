export default function({dispatch}) {
    return next => action => {
        if(!action.resultsList || !action.resultsList.then){
            return next(action);
        }
        action.resultsList
            .then((response) => {
                const newAction = {...action, resultsList: response}
                dispatch(newAction);
            })
    }
}
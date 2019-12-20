export default function({dispatch}) {
    return next => action => {
        if(!action.qustionsList || !action.qustionsList.then){
            return next(action);
        }
        action.qustionsList
            .then((response) => {
                const newAction = {...action, qustionsList: response}
                dispatch(newAction);
            })
    }
}
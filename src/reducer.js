import * as actionTypes from "./actionTypes";

let lastID = JSON.parse(localStorage.getItem('bugListState'))?.slice(-1)[0]?.id || 0;

function reducer (state = [], action) {
    if (action.type === actionTypes.BUG_ADDED) {
        return [
            ...state,
            {
                id: ++lastID,
                description: action.payload.description,
                resolved: false,
            },
        ];
    } else if (action.type === actionTypes.BUG_REMOVED) {
        return state.filter( bug => bug.id !== action.payload.id );
    } else if (action.type === actionTypes.BUG_RESOLVED) {
        return state.map( bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true} );
    } else if (action.type === actionTypes.BUG_UNRESOLVE) {
        return state.map( bug => bug.id !== action.payload.id ? bug : {...bug, resolved: false} );
    } else {
        return state;
    }
}

export default reducer;
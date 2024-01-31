import * as actionTypes from "./actionTypes";

export const addBug = (description) => ({
    type: actionTypes.BUG_ADDED,
    payload: {
        description,
    }
});

export const removeBug = (id) => ({
    type: actionTypes.BUG_REMOVED,
    payload: {
        id,
    }
});

export const resolveBug = (id) => ({
    type: actionTypes.BUG_RESOLVED,
    payload: {
        id,
    }
});

export const unResolveBug = (id) => ({
    type: actionTypes.BUG_UNRESOLVE,
    payload: {
        id,
    }
});
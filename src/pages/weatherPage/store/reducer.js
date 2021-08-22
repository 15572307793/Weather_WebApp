import * as actionType from './actionType';

export default (state = {}, action) => {
    switch (action.type) {
        case actionType.GET_ROUTER: {
            return { ...state, routerData: action.data }
        }
        default:
            return state;
    }
}
import {LOGIN,LOGOUT} from './actions';

const initialState = {
    profile:{},
};

export default function auth(state = initialState,action){
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {
                user: action.user,
              });
        case LOGOUT:
            const {user,...withoutUser} = state;
            return {withoutUser};
        default:
            return state;
    }

}

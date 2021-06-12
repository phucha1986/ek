import produce from "immer"
//store = {user: {userName: '', isAuthenticated: false}}
const reducer = produce((draft = {user: {userName: ''}, isAuthenticated: false}, action) =>
    {
        switch(action.type)
        {
            case 'loggedIn':
                draft.user.userName = action.payload.userName;
                draft.isAuthenticated = true;
                draft.user.id = action.payload.id;
                return draft;
            case 'loggedOut':
                draft.isAuthenticated = false;
                return draft;
            default:
                return draft;
        }    
    }
);

export default reducer;
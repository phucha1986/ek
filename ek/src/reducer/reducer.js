import produce from "immer"
//store = {user: {userName: '', isAuthenticated: false}}
const reducer = produce((draft = {user: {userName: ''}, isAuthenticated: false}, action) =>
    {
        switch(action.type)
        {
            case 'loggedIn':
                draft.user = action.payload.user;
                draft.isAuthenticated = true;                
                console.log("stored");
                return draft;
            case 'loggedOut':
                draft.isAuthenticated = false;
                draft.user = null;
                return draft;
            default:
                return draft;
        }    
    }
);

export default reducer;
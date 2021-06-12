
export default function reducer(store = [], action)
{
    switch(action.type)
    {
        case 'loggedIn':
            return [            
                ...store,
                {
                    userName: action.payload.userName,
                    isAuthenticated: true
                }            
            ];
        case 'loggedOut':
            return [            
                ...store,
                {                
                    isAuthenticated: false
                }            
            ];
        default:
            return store;
    }    
}
const loggedOutAction = () => ({
    type: 'loggedOut'
  });

export const loggedOut = () => {
    return async function loggedOutThunk(dispatch){                     
        localStorage.setItem("loggedIn", false);
        localStorage.setItem("user", null);
        dispatch(loggedOutAction);
    }
};
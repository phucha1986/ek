const loggedInAction = () => ({ type: 'loggedIn', payload: { userName: 'Antonio', id: 'EK 619 931 045'}});

const fakeLoginAPI = (userNameValue, passwordValue) => {
    if(userNameValue === "EK123456789" && passwordValue === "123456")
    {
        return new Promise(resolve => setTimeout(function(){resolve("OK")}, 3000));
    }else{
        return new Promise(resolve => resolve("NOT_OK"));
    }
}

export const loggedIn = (userNameValue, passwordValue) => {
    return async function loggedInThunk(dispatch){             
        let loginResult = await fakeLoginAPI(userNameValue, passwordValue);
        if(loginResult === "OK")
        {
            localStorage.setItem("loggedIn", true);
            localStorage.setItem("user", JSON.stringify({ userName: 'Antonio', id: 'EK 619 931 045'}));
            dispatch(loggedInAction());                                    
        }
        return loginResult;
    }
};
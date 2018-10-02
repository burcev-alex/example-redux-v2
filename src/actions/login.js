export function setLogin(name, password) {
    return {
        type: "LOGIN",
        payload: {
            login: name,
            pass: password
        }
    };
}

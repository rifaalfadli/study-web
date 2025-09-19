const SystemRejectRequest = async (promise) => {
    return Promise.reject(promise);
};

const SystemResolveRequest = async (promise) => {
    return Promise.resolve(promise);
};

const action = () => {
    console.log("Executing");
};

// without try catch
const fetchTodo1 = async () => {
    const promise1 = new Promise(action);
    // await SystemRejectRequest(promise1);
    await SystemResolveRequest(promise1);
}

// with try catch
const fetchTodo2 = async () => {
    const onFailed = () => console.log("Request failed");
    try {
        const promise2 = new Promise(action);
        // await SystemRejectRequest(promise2);
        await SystemResolveRequest(promise2);
    } catch (error) {
        onFailed();
    }
};

fetchTodo1();
fetchTodo2();

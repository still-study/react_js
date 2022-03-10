export const SET_DATA = "API::SET_DATA";
export const SET_ERROR = "API::SET_ERROR";
export const SET_LOADING = "API::SET_LOADING";

export const setData = (dataValue) => ({
    type: SET_DATA,
    data: dataValue
});

export const setError = (isErrorValue) => ({
    type: SET_ERROR,
    isError: isErrorValue
});

export const setLoading = (isLoadingValue) => ({
    type: SET_LOADING,
    isLoading: isLoadingValue
});

export const getUsersMiddleware = () => async (dispatch) => {
    dispatch(setData([]));
    dispatch(setError(false));
    dispatch(setLoading(true));

    try {
        const res = await fetch('https://reqres.in/api/users');
        const result = await res.json();
        dispatch(setData(result));
    } catch (e) {
        console.error(e);
        dispatch(setError(true));
    }
    dispatch(setLoading(false));
}

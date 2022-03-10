import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getError, getLoading, getUsers} from "../../store/api/selectors";
import {getUsersMiddleware} from "../../store/api/actions";
import CircularProgress from '@mui/material/CircularProgress';

export const Api = () => {
    const dispatch = useDispatch();
    const data = useSelector(getUsers);
    const isLoading = useSelector(getLoading);
    const isError = useSelector(getError);

    useEffect(() => {
        dispatch(getUsersMiddleware());
    }, [dispatch]);
    return <div>
        {
            isError && <button onClick={() => {
                dispatch(getUsersMiddleware())
            }}>Reload</button>}
        {
            isLoading && <CircularProgress />
        }

        {
            data?.data?.map((user) =>
                (<div key={user.id}>
                    <img src={user.avatar} alt=""/>
                    <p>{user.first_name}</p>
                    <p>{user.last_name}</p>
                    <p>{user.email}</p>
                </div>)
            )
        }
    </div>

}
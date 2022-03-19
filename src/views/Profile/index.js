// import {ReduxExample} from '../../examples/reduxExamples'
import {useSelector} from "react-redux";
import {getUser} from "../../store/user/reducer";

export const Profile = () => {
    const user = useSelector(getUser);
    // return <ReduxExample></ReduxExample>

    return (
        <div>
            <p>{user.email}</p>
        </div>
    )
}
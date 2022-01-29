import {useSelector, useDispatch} from 'react-redux';
import {useState} from "react";


export const ReduxExample = () => {
  const {isChecked} = useSelector((state) => state);

  const dispatch = useDispatch();

  const onChangeStatus = (event) => {
    dispatch({
      type: "CHANGE_IS_CHECKED",
      isChecked: event.target.checked
    })
  }

  return <div>
    <input onChange={onChangeStatus} type="checkbox" checked={isChecked}/>
  </div>
}
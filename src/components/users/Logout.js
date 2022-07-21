import { Button } from '@mui/material'
import { logoutSlice, selectUser } from 'modules/slices';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Logout = () => {
    const user = useSelector(state=>state.user)
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logoutSlice())
    }
  return (
    <div>
          <h1>Welcome <span> {user.email }</span></h1>
        <Button onClick={(e)=>handleLogout(e)}>Logout</Button>
    </div>
  )
}

export default Logout
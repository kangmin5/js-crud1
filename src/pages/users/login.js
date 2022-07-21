import Login from 'components/Users/Login'
import Logout from 'components/Users/Logout'
import { selectUser } from 'modules/slices'
import React from 'react'
import { useSelector } from 'react-redux'

const LoginPage = () => {
  const user = useSelector(state=>state.user)

  return (
    <div>
      {user ? <Logout /> : <Login />}
    </div>
  )
}

export default LoginPage
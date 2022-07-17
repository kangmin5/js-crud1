import { Grid } from '@mui/material'
import MyForm from 'components/users/MyForm'
import Mytable from 'components/users/MyTable'
import React from 'react'

const UsersPage = () => {
  return(
  <div>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={6}>
        <MyForm/>
      </Grid>
      <Grid item xs={12} md={8} lg={6}>
        <Mytable/>
      </Grid>
    </Grid>

  </div>
  )
}

export default UsersPage
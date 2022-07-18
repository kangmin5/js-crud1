import { Grid } from '@mui/material'
import MyForm from 'components/users/MyForm'
import Mytable from 'components/users/MyTable'
import React from 'react'
import styles from 'styles/user.module.css'

const UsersPage = () => {

  return(
  <div className={styles.container}>
    <Grid container spacing={2} className={styles.left}>
      <Grid item xs={12} md={4} lg={3} >
          <MyForm />
      </Grid>
        <Grid item xs={12} md={8} lg={9} className={ styles.right}>
          <Mytable />
      </Grid>
    </Grid>

  </div>
  )
}

export default UsersPage
import { Grid } from '@mui/material'
import Join from 'components/Users/Join'
import MyForm from 'components/Users/MyForm'
import Mytable from 'components/Users/MyTable'
import React from 'react'
import styles from 'styles/user.module.css'

const UsersPage = () => {

  return(
  <div className={styles.container}>
    <Grid container spacing={2} className={styles.left}>

        <Grid item xs={12} md={8} lg={9} className={ styles.right}>
          <Mytable />
      </Grid>
    </Grid>

  </div>
  )
}

export default UsersPage
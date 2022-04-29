import { Typography } from '@mui/material'
import React from 'react'

const Logo = ({medio, grande}) => {
  return (
    <Typography
    variant="h6"
    noWrap
    component="div"
    sx={{ mr: 2, display: { xs: medio, md: grande } }}
  >
    LOGO
  </Typography>
  )
}

export default Logo
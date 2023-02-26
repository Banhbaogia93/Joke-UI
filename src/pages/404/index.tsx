import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const PageNotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <Helmet>
        <title>404 | Page not found</title>
      </Helmet>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
        height="100%"
      >
        <Typography>
          Oops... 404 not found
        </Typography>
        <Button onClick={() => { navigate('/') }}>
          Back Home
        </Button>
      </Stack>
    </React.Fragment>
  )
}

export default PageNotFound

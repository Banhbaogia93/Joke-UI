import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const NoMore: React.FC = () => {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <Helmet>
        <title>Thank you for taking a look</title>
      </Helmet>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
        height="100%"
      >
        <Typography>
          That&apos;s all the jokes for today! Come back another day!
        </Typography>
        <Button onClick={() => { navigate('/') }}>
          Back Home
        </Button>
      </Stack>
    </React.Fragment>
  )
}

export default NoMore

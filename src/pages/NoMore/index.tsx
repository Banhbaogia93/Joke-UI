import React from 'react'
import Cookies from 'universal-cookie/es6'
import { Helmet } from 'react-helmet'
import { Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router'

const cookies = new Cookies()

const NoMore: React.FC = () => {
  const navigate = useNavigate()

  const jokesCookie = cookies.get('voted')

  React.useEffect(() => {
    if (jokesCookie === undefined) {
      navigate('/', { replace: true })
    }
  }, [])

  return (
    <React.Fragment>
      <Helmet>
        <title>Thank you for taking a look</title>
      </Helmet>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
        width="100%"
      >
        <Typography>
          That&apos;s all the jokes for today! Come back another day!
        </Typography>
      </Stack>
    </React.Fragment>
  )
}

export default NoMore

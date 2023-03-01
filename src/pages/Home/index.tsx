import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie/es6'
import { getAllJokes } from '../../apis/joke'
import type { TJoke } from '../../types'
import { Button, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Home: React.FC = () => {
  const [data, setData] = useState<any>({})

  const navigate = useNavigate()
  const cookies = new Cookies()

  useEffect(() => {
    const initCookies: any = async () => {
      const jokes = await getAllJokes()
      Object.values(jokes.data).forEach(
        (jk: any, idx: number) => {
          data[idx] = {
            id: jk.id,
            voted: null
          }
          setData(data)
        }
      )

      const voted = cookies.get('voted')
      if (voted === undefined) {
        cookies.set('voted', JSON.stringify(data), { path: '/' })
      }
    }
    initCookies()
  }, [])

  const handleOnClick: any = () => {
    const firstJoke = Object.values(data).shift() as TJoke
    navigate(`/joke/${firstJoke.id}`, { replace: true })
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Jokes for everyday</title>
      </Helmet>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h4" textAlign="center"><strong>Welcome to Jokes for everyday!</strong></Typography>
        <Typography variant="h5" textAlign="center">Let&apos;s start a new day with laughing now</Typography>
        <Button variant="contained" size="medium" onClick={handleOnClick}>
          Go ahead
        </Button>
      </Stack>
    </React.Fragment>
  )
}

export default Home

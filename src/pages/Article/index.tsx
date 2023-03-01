import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Cookies from 'universal-cookie/es6'

import Content from '../../components/Content'
import Vote from '../../components/Vote'

import { Box, Button, CircularProgress, Stack } from '@mui/material'

import { getJoke } from '../../apis/joke'
import type { TJoke } from '../../types'

const cookies = new Cookies()

const Article: React.FC = () => {
  const [article, setArticle] = React.useState<TJoke>()
  const [loading, setLoading] = React.useState<boolean>(false)

  const { id } = useParams()
  const navigate = useNavigate()

  const jokesCookie = cookies.get('voted')

  React.useEffect(() => {
    if (jokesCookie !== undefined && id !== undefined) {
      getJoke(id)
        .then((res: any) => {
          setArticle(res.data)
        })
        .catch(() => { navigate('/404', { replace: true }) })
    } else {
      navigate('/', { replace: true })
    }
  }, [id])

  const handleUpdateVoteList: any = (updateList: any) => {
    cookies.set('voted', updateList, { path: '/' })
    const indexCurrentJoke = Object.values(jokesCookie).findIndex((j: any) => j.id === id)
    const indexNextJoke = indexCurrentJoke + 1

    let url = ''
    if (indexNextJoke >= Object.values(jokesCookie).length) {
      url = '/end'
    } else {
      const nextJoke = Object.values(jokesCookie)[indexNextJoke] as TJoke
      url = `/joke/${nextJoke.id}`
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate(url, { replace: true })
    }, 3000)
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Joke {id}</title>
      </Helmet>
      <Stack
        justifyContent="center"
        alignContent="center"
        width="100%"
        marginTop={2}
        marginBottom={2}
        spacing={3}
      >
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress size={20} variant={loading ? 'indeterminate' : 'determinate'} />
        </Box>
        {article !== undefined && (
          <React.Fragment>
            <Content {...article} />
            <Vote voteId={article.id} voteList={jokesCookie} onUpdateVoteList={handleUpdateVoteList} />
            <Box sx={{ textAlign: 'center' }}>
              <Button variant="outlined" onClick={() => { navigate('/') }}>
                  Back Home
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Stack>
    </React.Fragment>
  )
}

export default Article

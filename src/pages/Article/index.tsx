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
    const nextJoke = Object.values(jokesCookie).find((j: any) => j.voted === null) as TJoke

    let url = ''
    if (nextJoke === undefined) {
      url = '/end'
    } else {
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
        spacing={4}
      >
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress variant={loading ? 'indeterminate' : 'determinate'} />
        </Box>
        {article !== undefined && (
          <React.Fragment>
            <Content {...article} />
            <Vote voteId={article.id} voteList={jokesCookie} onUpdateVoteList={handleUpdateVoteList} />
          </React.Fragment>
        )}
        <Box sx={{ textAlign: 'center' }}>
          <Button variant="outlined" onClick={() => { navigate('/') }}>
              Back Home
          </Button>
        </Box>
      </Stack>
    </React.Fragment>
  )
}

export default Article

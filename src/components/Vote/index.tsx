import Stack from '@mui/material/Stack'
import { Button, Divider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

interface TVote {
  voteId: string
  voteList: any
  onUpdateVoteList: (list: any) => void
}

const Vote: React.FC<TVote> = ({ voteId, voteList, onUpdateVoteList }) => {
  const [voted, setVoted] = useState<boolean | null>()

  useEffect(() => { setVoted(null) }, [voteId])

  const handleOnVote: any = (voted: boolean) => {
    setVoted(voted)
    Object
      .values(voteList)
      .forEach(
        (v: any, idx: number) => {
          if (v.id === voteId) voteList[idx] = { ...v, voted }
        }
      )
    onUpdateVoteList(voteList)
  }

  return (
    <React.Fragment>
      <Divider variant="middle" />
      <Stack
        data-testid="vote-ele"
        direction="row"
        alignItems="center"
        alignSelf="center"
        spacing={2}
      >
        <Typography>
          {voted === true && <strong><i>Thank you for your like</i></strong>}
          {voted === false && <strong><i>Hey, let&apos;s laugh a out loud though you didn&apos;t like</i></strong>}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        alignSelf="center"
        spacing={2}
      >
        <Button
          aria-label="thumbup"
          variant="contained"
          size="large"
          sx={{
            width: 190,
            backgroundColor: '#2c7edb'
          }}
          onClick={() => { handleOnVote(true) }}
          disabled={voted !== null}
        >
          This is Funny!
        </Button>
        <Button
          aria-label="thumbdown"
          variant="contained"
          size="large"
          sx={{
            width: 190,
            backgroundColor: '#26a85d'
          }}
          onClick={() => { handleOnVote(false) }}
          disabled={voted !== null}
        >
          This is not funny.
        </Button>
      </Stack>
    </React.Fragment>
  )
}

export default Vote

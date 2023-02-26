import IconButton from '@mui/material/IconButton'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'
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
      <Stack
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
        <IconButton
          color="success"
          aria-label="thumbup"
          onClick={() => { handleOnVote(true) }}
          disabled={voted !== null}
        >
          <ThumbUpIcon />
        </IconButton>
        <IconButton
          color="error"
          aria-label="thumbdown"
          onClick={() => { handleOnVote(false) }}
          disabled={voted !== null}
        >
          <ThumbDownIcon />
        </IconButton>
      </Stack>
    </React.Fragment>
  )
}

export default Vote

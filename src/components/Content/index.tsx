import React from 'react'
import { type TJoke } from '../../types'
import { Box, Paper } from '@mui/material'

const Content: React.FC<TJoke> = ({ content }: TJoke) => {
  return (
    <React.Fragment>
      <Box
        maxWidth="sm"
        padding={5}
        fontFamily="Roboto"
        display="flex"
        alignSelf="center"
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Paper>
      </Box>
    </React.Fragment>
  )
}

export default Content

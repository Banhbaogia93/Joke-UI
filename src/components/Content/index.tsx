import React from 'react'
import { type TJoke } from '../../types'
import { Box } from '@mui/material'

const Content: React.FC<TJoke> = ({ content }: TJoke) => {
  return (
    <React.Fragment>
      <Box
        maxWidth={850}
        padding={5}
        fontFamily="Roboto"
        display="flex"
        alignSelf="center"
      >
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
    </React.Fragment>
  )
}

export default Content

import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const Quotes: React.FC = () => {
  return (
    <React.Fragment>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={0}
        height="100%"
      >
        <Box>
          <Typography>
            <i>&quot;Peace begins with a smile.&quot;</i>
          </Typography>
        </Box>
        <Box>
          <Typography>
            ---<strong>Mother Teresa</strong>---
          </Typography>
        </Box>
      </Stack>
    </React.Fragment>
  )
}

export default Quotes

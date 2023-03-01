import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const PageTitle: React.FC = () => {
  return (
    <React.Fragment>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={0}
        height="100%"
        color="white"
        sx={{
          backgroundColor: '#28b363'
        }}
      >
        <Box textAlign="center">
          <Typography variant="h4" fontFamily="Mulish">
            <strong>A joke a day keeps the doctor away</strong>
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" fontFamily="Mulish">If you joke wrong way, your teeth have to pay. (Serious)</Typography>
        </Box>
      </Stack>
    </React.Fragment>
  )
}

export default PageTitle

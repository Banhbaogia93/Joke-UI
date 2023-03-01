import React from 'react'
import { Box, Divider, Stack, Typography } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <Divider />
      <Stack
        justifyContent="center"
        alignItems="center"
        color="gray"
      >
        <Box textAlign="center" padding={2}>
          <Typography variant="body1" fontSize={14}>
            This website as part of HLsolutions program. The materials contained on this website
            are provided for general <br /> information only and do not constitute any formof advice.
            HLS assumes no responsibility for the accuracy of any particular statement and <br /> accepts
            no liability for any loss or damage which may arise from reliance on the information contained on this site
          </Typography>
          <Typography marginTop={2} fontSize={14}>
            <strong>Copyright 2021 HLS</strong>
          </Typography>
        </Box>
      </Stack>
    </React.Fragment>
  )
}

export default Footer

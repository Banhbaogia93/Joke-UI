import React from 'react'
import { Helmet } from 'react-helmet'
import { Stack, Typography } from '@mui/material'

const NoMore: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Thank you for taking a look</title>
      </Helmet>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
        width="100%"
      >
        <Typography>
          That&apos;s all the jokes for today! Come back another day!
        </Typography>
      </Stack>
    </React.Fragment>
  )
}

export default NoMore

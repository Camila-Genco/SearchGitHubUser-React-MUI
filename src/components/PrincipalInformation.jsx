import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { Fragment } from 'react'

export const PrincipalInformation = ({userState}) => {
    const {name, login, created_at} = userState;

    return (
    <Fragment>
        <Stack 
        direction={{xs: "column", lg: "row"}}
        sx={{
            justifyContent: "space-between"
        }}>
            <Typography variant='h4'>{name}</Typography>
            <Typography variant='subtitle2'>Se unió el {new Date(created_at).toLocaleDateString('en-us')}</Typography>
        </Stack>
        <Typography variant='caption'>@{login}</Typography>
    </Fragment>
  )
}

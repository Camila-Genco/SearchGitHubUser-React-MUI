import { Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'

export const PaperInformation = ({userState}) => {
    const {public_repos, followers, following} = userState;
  
    return (
        <Paper elevation={3}>
            <Stack 
            spacing={3} 
            direction="row"
            sx={{
                justifyContent:"space-evenly",
                margin: "20px"}}>
                <Stack>
                <Typography variant='body1'>Repos</Typography>
                <Typography variant='h6' align='center'>{public_repos}</Typography>                
                </Stack>
                <Stack>
                <Typography variant='body1'>Seguidores</Typography>
                <Typography variant='h6'  align='center'>{followers}</Typography>
                </Stack>
                <Stack>
                <Typography variant='body1'>Siguiendo</Typography>
                <Typography variant='h6'  align='center'>{following}</Typography>
                </Stack>
            </Stack>

        </Paper>
  )
}

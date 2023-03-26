import { Grid } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';
import {Typography} from '@mui/material';

export const LocationInformation = ({userState}) => {
    const {location, twitter_username, blog, company} = userState;

  return (
    <Grid
      container
      spacing={2}
      sx={{marginTop:'15px'}} 
    >
      <Grid item xs={12} lg={6}>
        <Stack direction="row" spacing={2}>
          <LocationOnIcon/>
          <Typography>{location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Stack direction="row" spacing={2}>
          <TwitterIcon/>
          {twitter_username !== null
            ? <Typography>@{twitter_username}</Typography>
            : <Typography>No Disponible</Typography>
          }
        </Stack>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Stack direction="row" spacing={2}>
          <LanguageIcon/>
          {blog !== null
            ? <a target="blank" href={blog}><Typography>{blog}</Typography></a>
            : <Typography>No Disponible</Typography>
          }
        </Stack>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Stack direction="row" spacing={2}>
          <BusinessIcon />
          {company !== null
            ? <Typography>{company}</Typography>
            : <Typography>No Disponible</Typography>
          }
        </Stack>
      </Grid>
    </Grid>
  )
}

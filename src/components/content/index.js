import React from 'react';
import { Grid } from '@material-ui/core';

import { StyledContainer } from './styles';


const Content = ({ }) => (
  <StyledContainer maxWidth={'lg'}>
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={3}>
        a
      </Grid>
      <Grid container item xs={12} spacing={3}>
        b
      </Grid>
      <Grid container item xs={12} spacing={3}>
        c
      </Grid>
    </Grid>
  </StyledContainer>
);

export { Content };
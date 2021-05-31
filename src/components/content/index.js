import React from 'react';
import { Grid } from '@material-ui/core';

import { StyledContainer, Title, Price } from './styles';


const Content = ({ }) => (
  <StyledContainer maxWidth={'lg'}>
     <Grid container spacing={1}>
      <Grid container item xs={12} lg={4} spacing={3}>
          <img src="https://images7.kabum.com.br/produtos/fotos/85197/85197_index_g.jpg" alt="ssd 128GB"  style={{width:'128px', height: '128px'}}/>
      </Grid>
      <Grid container item xs={12} lg={4} spacing={3}>
        <Title>Disco sólido interno</Title>
        <Price>R$ 258</Price>
      </Grid>
      <Grid container item xs={12} lg={4} spacing={3}>
        teste
      </Grid>
    </Grid>
  </StyledContainer>
);

export { Content };
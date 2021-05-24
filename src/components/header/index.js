import React from 'react';
import { StyledHeader } from './styles';
import { SInput, Logo, Login } from '../../components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const Header = () => (
  <StyledHeader>
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Logo />

        <SInput />

        <Login />
      </Grid>
    </Container>
  </StyledHeader>
);

export { Header };
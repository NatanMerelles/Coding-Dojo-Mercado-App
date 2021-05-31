import React from 'react';
import { Grid } from '@material-ui/core';

import { StyledContainer, Title, Price, Wrapper } from './styles';


const Content = ({ }) => (
  <StyledContainer maxWidth={'lg'}>
    <Grid container spacing={1} alignItems="stretch" style={{ height: '526px' }}>
      <Grid container item xs={12} lg={4} spacing={3}>
        <img src="https://images7.kabum.com.br/produtos/fotos/85197/85197_index_g.jpg" alt="ssd 128GB" style={{ width: '128px', height: '128px' }} />
      </Grid>
      <Grid container item xs={12} lg={4} spacing={3} direction="column" justify="space-between">
        <Wrapper>
          <Title>Disco sólido interno</Title>
          <Price>R$ 258</Price>
        </Wrapper>
        <Wrapper>
          <ul>
            <li>Com tecnologia 3D NAND.</li>
            <li>É útil para salvar programas e documentos com a sua capacidade de 240 GB.</li>
            <li>Resistente aos choques fortes.</li>
            <li>Tamanho de 2.5 ".</li>
            <li>Interface de conexão: SATA III.</li>
            <li>Adequado para PC e Notebook</li>
            <li>As imagens podem ser ilustrativas.</li>
          </ul>
        </Wrapper>
      </Grid>
      <Grid container item xs={12} lg={4} spacing={3}>
        teste
      </Grid>
    </Grid>
    <Grid>sas</Grid>
  </StyledContainer>
);

export { Content };
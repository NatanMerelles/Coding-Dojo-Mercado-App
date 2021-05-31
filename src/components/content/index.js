import React from 'react';
import { Grid, Button } from '@material-ui/core';

import { StyledContainer, Title, Price, Wrapper, Infos } from './styles';


const Content = ({ }) => (
  <StyledContainer maxWidth={'lg'}>
    <Grid container spacing={1} justify="space-between" style={{ height: '526px' }}>
      <Grid container item xs={12} lg={4} spacing={3}>
        <img src="https://images7.kabum.com.br/produtos/fotos/85197/85197_index_g.jpg" alt="ssd 128GB" style={{ width: '128px', height: '128px' }} />
      </Grid>
      <Grid container item xs={12} lg={4} spacing={3} direction="column" justify="space-between">
        <Wrapper>
          <Title>Disco sólido interno</Title>
          <Price>R$ 258</Price>
        </Wrapper>
        <Wrapper>
          <b>O que você precisa saber sobre esse produto:</b>
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
        <Infos>
          <p className="prediction">Chegará grátis entre os dias 31 mai. e 4 jun.</p>
          <p className="stock" >Estoque disponível</p>
          <div className="amount">
            <label >Quantidade:</label>
            <input type="text" />
          </div>
          <div className="buttons">
            <Button variant="contained" color="primary">
              Comprar
            </Button>
            <Button variant="contained" color="primary">
              Adicionar ao carrinho
            </Button>
          </div>
        </Infos>
      </Grid>
    </Grid>
    <Grid>sas</Grid>
  </StyledContainer>
);

export { Content };
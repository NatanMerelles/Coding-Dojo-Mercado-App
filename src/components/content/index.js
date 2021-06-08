import React from 'react';
import { Grid, Button } from '@material-ui/core';

import { StyledContainer, Title, Price, Wrapper, Infos } from './styles';


const Content = ({ }) => (
  <StyledContainer maxWidth={'lg'}>
    <Grid container spacing={4} justify="space-between">
      <Grid item lg={4}>
        <img src="https://images7.kabum.com.br/produtos/fotos/85197/85197_index_g.jpg"
          alt="ssd 128GB" width="100%" />
      </Grid>

      {/* Container se usa quando quer utilizar a propriedade flex como pai */}
      <Grid container item lg={5} direction="column" justify="space-between">
        <Wrapper>
          <Title>Disco sólido interno Kingston SA400S37/240G 240GB</Title>
          <Price>R$ 258</Price>
        </Wrapper>

        <Wrapper>
          <p>O que você precisa saber sobre esse produto:</p>

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

      <Grid item lg={3}>
        <Infos container item xs={12}>
          <Grid container item lg={12}>
            <p className="prediction">Chegará grátis entre os dias 31 mai. e 4 jun.</p>
          </Grid>
          <Grid container item lg={12}>
            <p className="stock" >Estoque disponível</p>
          </Grid>
          <div className="amount">
            <label >Quantidade:</label>
            <input type="text" />
          </div>
          <div className="buttons">
            <Button variant="contained" color="primary" fullWidth>
              Comprar
            </Button>
            <Button variant="contained" color="primary" fullWidth>
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
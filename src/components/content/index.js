import React from 'react';
import { Grid, Button, Box } from '@material-ui/core';

import { StyledContainer, Title, Price, Wrapper, Infos, Description } from './styles';


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
        <Infos>
          <Grid item>
            <p className="prediction">Chegará grátis entre os dias 31 mai. e 4 jun.</p>
          </Grid>

          <Grid item>
            <p className="stock" >Estoque disponível</p>
          </Grid>

          <Box display="flex" alignItems="center" className="amount">
            <label >Quantidade:</label>
            <input type="text" />
          </Box>

          <div className="buttons">
            <Button variant="contained" color="primary" fullWidth>
              Comprar Agora
            </Button>
            <Button variant="contained" color="inherit" fullWidth>
              Adicionar ao carrinho
            </Button>
          </div>
        </Infos>
      </Grid>
    </Grid>

    <Description>
      <h3>Opiniões sobre Disco sólido interno Kingston SA400S37/240G 240GB</h3>

      <div className="block-text">
        <p>SSD é sinônimo de produtividade!!!!</p>

        <p>
          Qual do surgimento desta nova tecnologia, eu preferi aguardar o "amadurecimento" desta nova tecnologia de armazenamento. Adquiri este produto e instalei no meu pc que utiliza uma configuração, composta por: core 2 quad (2,8ghz), memoria ram (8 gb ddr2) e um hdd de 1tb. Bem, é possível transferir todos os arquivos de sistema do antigo hd para o novo, mas preferi efetuar uma instalação limpa do windows 7 64bits. Pode acreditar!, com o uso do ssd, o desempenho e a produtividade elevou substancialmente. O flight simulator x está muito mais eficiente!. O tempo de carregamento do windows e de todos os programas reduziram incrivelmente. Um detalhe: apesar do hd ser sata iii, ela funcionou muito bem na minha placa mãe que é sata ii. Para aproveitar melhor o sistema de armazenamento, eu utilizo o ssd para armazenar o sistema operacional e os outros programas. O antigo hdd está sendo utilizado para backup do sistema e armazenamento dos arquivos gerais. Para finalizar, eu recomendo que assistam o vídeo do canal do youtube que me ajudou a efetuar a migração para esta nova tecnologia, além disso, passou todas as dicas para melhorar a perfomance geral do seu produto:. Otimização do ssd a fundo parte 1, 2 e 3 (canal do baboo). . Em suma, eu estou muito satisfeito com a qualidade do produto da kingston.
        </p>
      </div>
    </Description>
  </StyledContainer>
);

export { Content };
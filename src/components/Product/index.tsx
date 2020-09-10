import React from 'react';

import tshirtImage from '../../assets/tshirt.png';

import ProductAction from '../ProductAction';
import SellerInfo from '../SellerInfo';

import { 
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from './styles';



const Product: React.FC = () => {
  return (
      <Container>
          <Row>
            <a href="#">Compartilhar</a>
            <a href="#">Vender um igual</a>
          </Row>

          <Panel>
            <Column>
              <Gallery>
                <img alt="T-Shirt" src={tshirtImage} />
              </Gallery>

              <Info />
            </Column>
            
            <Column>
              <ProductAction />
              <SellerInfo />

              <WarrantySection />
              <WarrantySection />
              <WarrantySection />
            </Column>
          </Panel>
      </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Loren Ipsum</p>
        <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
      </span>

      <span>
        <p className="title">Garantia com o vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit nibh turpis, eu pharetra eros blandit nec. Vivamus tristique
    ligula quis mi fringilla, quis blandit risus auctor. Nullam viverra nulla in massa blandit, in auctor quam consequat. Cras faucibus
    volutpat eros, sed auctor ex interdum at. Etiam ut ornare tellus. Vivamus efficitur quam id velit maximus hendrerit. Cras vulputate 
    convallis arcu eget dictum. Nullam tempus nisl a diam fermentum, a rhoncus quam facilisis. Aliquam ullamcorper mauris vel euismod pellentesque. 
    Donec tincidunt in justo sit amet sagittis.
    <br />
    <br />
    Itens inclusos: <br />
    - 1px LED <br />
    - 1px LED <br />
    - 1px LED <br />
    - 1px LED <br />
    - 1px LED <br />

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit nibh turpis, eu pharetra eros blandit nec. Vivamus tristique
    ligula quis mi fringilla, quis blandit risus auctor. Nullam viverra nulla in massa blandit, in auctor quam consequat. Cras faucibus
    volutpat eros, sed auctor ex interdum at. Etiam ut ornare tellus. Vivamus efficitur quam id velit maximus hendrerit. Cras vulputate 
    convallis arcu eget dictum. Nullam tempus nisl a diam fermentum, a rhoncus quam facilisis. Aliquam ullamcorper mauris vel euismod pellentesque. 
    Donec tincidunt in justo sit amet sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit nibh turpis, eu pharetra eros blandit nec. Vivamus tristique
    ligula quis mi fringilla, quis blandit risus auctor. Nullam viverra nulla in massa blandit, in auctor quam consequat. Cras faucibus
    volutpat eros, sed auctor ex interdum at. Etiam ut ornare tellus. Vivamus efficitur quam id velit maximus hendrerit. Cras vulputate 
    convallis arcu eget dictum. Nullam tempus nisl a diam fermentum, a rhoncus quam facilisis. Aliquam ullamcorper mauris vel euismod pellentesque. 
    Donec tincidunt in justo sit amet sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit nibh turpis, eu pharetra eros blandit nec. Vivamus tristique
    ligula quis mi fringilla, quis blandit risus auctor. Nullam viverra nulla in massa blandit, in auctor quam consequat. Cras faucibus
    volutpat eros, sed auctor ex interdum at. Etiam ut ornare tellus. Vivamus efficitur quam id velit maximus hendrerit. Cras vulputate 
    convallis arcu eget dictum. Nullam tempus nisl a diam fermentum, a rhoncus quam facilisis. Aliquam ullamcorper mauris vel euismod pellentesque. 
    Donec tincidunt in justo sit amet sagittis.
    </p>
  </Description>
);

export default Product;
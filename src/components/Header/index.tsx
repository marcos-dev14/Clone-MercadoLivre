import React from 'react';

import logoImage from '../../assets/logo.png';
import textIcon from '../../assets/text.png';

import {
  Container,
  Content,
  NavLeft,
  Logo,
  Location,
  LocationIcon,
  NavCenter,
  Search,
  SearchIcon,
  NavBar,
  Cards,
  ArrowDownIcon,
  NavRight,
  RayIcon,
  MenuProfile,
  Profile,
  AvatarIcon,
  Shopping,
  Favorites,
  NotificationIcon,
  CarIcon,
} from './styles';


const Header: React.FC = () => {
  return (
      <Container>
        <Content>
          <NavLeft>
            <Logo>
              <img src={logoImage} alt="Logo do Mercado Livre"/>
            </Logo>

            <Location>
              <LocationIcon />
              <div>
                <span>Enviar para Marcos</span>
                <span>Rua Carlos 10</span>
              </div>
            </Location>
          </NavLeft>

          <NavCenter>
            <Search>
              <input
                type="text"
                placeholder="Buscar, produtos, marcas e muito mais..."
              />
              <div>
                <SearchIcon />
              </div>
            </Search>

            <NavBar>
              <Cards>
                <li>
                  <span>Categorias</span>
                  <ArrowDownIcon />
                </li>

                <li>
                  <span>Ofertas do dia</span>
                </li>

                <li>
                  <span>Históricos</span>
                </li>

                <li>
                  <span>Supermercados</span>
                </li>

                <li>
                  <span>Lojas Oficiais</span>
                </li>

                <li>
                  <span>vender</span>
                </li>

                <li>
                  <span>Contatos</span>
                </li>
              </Cards>
            </NavBar>
          </NavCenter>

          <NavRight>
            <h2>
              <RayIcon>
                <img src={textIcon} alt="Texto"/>
              </RayIcon>
            </h2>

            <MenuProfile>
              <Profile>
                <AvatarIcon />
                <strong>Marcos</strong>
                <ArrowDownIcon />
              </Profile>

              <Shopping>
              <strong>Compras</strong>
            </Shopping>

            <Favorites>
              <strong>Favoritos</strong>
              <ArrowDownIcon />
            </Favorites>
            <NotificationIcon />
            <CarIcon />
            </MenuProfile>

          </NavRight>
        </Content>
      </Container>
  );
}

export default Header;
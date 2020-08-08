import React from 'react';
import styled from 'styled-components';

import { Header } from './Header';
import { Footer } from './Footer';

interface Props {
  children: JSX.Element[] | JSX.Element
}

const LayoutWraper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 1 0 auto;
`;
const Container = styled.div`
  box-sizing: border-box;
  max-width: 1000px;
  width: 100%;
  padding: 0 10px;
`;

export const Layout: React.FC<Props> = ({ children }) => (
  <LayoutWraper>
    <Header />
    <Content>
      <Container>{children}</Container>
    </Content>
    <Footer />
  </LayoutWraper>
);

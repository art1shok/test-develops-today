import React, { FC } from 'react';
import styled from 'styled-components';

export const Footer: FC = () => (
  <FooterWrapper>
    <FooterContainer>
      <Copyrights
        href="https://github.com/art1shok"
        target="blank"
      >
        Made by Kvitka Artem
      </Copyrights>
    </FooterContainer>
  </FooterWrapper>
);

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box; 
  max-width: 800px;
  height: 50px;
  padding: 0 10px;
  margin: 0 auto;
`;

const FooterWrapper = styled.div`
  background: #020202;
  background: linear-gradient(90deg, #260507 0%, #5f0910 50%, #ca1d24 100%);
`;

const Copyrights = styled.a`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
`;

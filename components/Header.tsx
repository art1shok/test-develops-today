import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box; 
  max-width: 800px;
  height: 50px;
  padding: 0 10px;
  margin: 0 auto;
`;

const HeaderWraper = styled.div`
  background: #020202;
  background: linear-gradient(90deg, #1a1932 0%, #121234 50%, #13069b 100%);

`;

const LinkStyled = styled.a`
  color: white;
    font-size: 15px;
    white-space: nowrap;
    text-decoration-line: none;
    padding: 10px;
    border: 2px solid white;
    border-radius: 10px;
    :hover {
      background-color: darken(#fff, 40%);
      color: grey;
  }
`;

const LogoText = styled.p`
  color: white;
  text-align: center;
  font-size: 14px;
  padding: 5px;
`;

export const Header = () => (
  <HeaderWraper>
    <HeaderContainer>
      <Link href="/" passHref>
        <LinkStyled>
          Home
        </LinkStyled>
      </Link>
      <LogoText>Post Page</LogoText>
      <Link href="/posts/new" passHref>
        <LinkStyled>
          New Post
        </LinkStyled>
      </Link>
    </HeaderContainer>
  </HeaderWraper>
);

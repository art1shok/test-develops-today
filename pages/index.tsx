import { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link';

import React from 'react';
import { apiService } from '../services/apiService';
import { Layout } from '../components/Layout';

interface Props {
  data: DevelopsToday.Post[]
}

const IndexPage: NextPage<Props> = ({ data }) => (
  <Layout>
    <PostsContainer>
      {data.map(({ id, body, title }) => (
        <div key={id}>
          <Link href="/posts/[id]" as={`/posts/${id}`}>
            <LinkStyled>{title}</LinkStyled>
          </Link>
          <p>{body}</p>
        </div>
      ))}
    </PostsContainer>
  </Layout>
);

IndexPage.getInitialProps = async () => {
  const response = await apiService.getLatestPost();

  return {
    data: response.data,
  };
};

export default IndexPage;

const PostsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const LinkStyled = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    padding: 5px;
    font-size: 20px;
    text-align: center;
    text-decoration: none;
    min-width: 200px;
    border-radius: 10px;
    border: 2px solid grey;
    > p {
        width: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    :hover {
        background-color: #eee;
        cursor: pointer;
    }
`;

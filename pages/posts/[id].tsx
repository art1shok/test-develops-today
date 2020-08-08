import React from 'react';
import { NextPage } from 'next';
import Error from 'next/error';
import styled from 'styled-components';
import Head from 'next/head';
import { apiService } from '../../services/apiService';
import { Layout } from '../../components/Layout';

interface Props {
  post: DevelopsToday.Post | null
}

const Post: NextPage<Props> = ({ post }) => {
  if (!post) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <PostTitle>{post.title}</PostTitle>
      <p>{post.body}</p>
    </Layout>
  );
};

Post.getInitialProps = async ({ query }) => {
  let response = null;
  try {
    response = await apiService.getPostById(typeof query.id === 'string' ? query.id : '0');
  } catch {
    return { post: null };
  }

  return { post: response.data };
};

export default Post;

const PostTitle = styled.h1`
  box-sizing: border-box;
  text-align: center;
  width: 100%; 
  padding: 5px;
`;

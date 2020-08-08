import React, { useState } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { apiService } from '../../services/apiService';
import { Layout } from '../../components/Layout';

const NewPostPage: NextPage = () => {
  const [formData, setFormData] = useState({ title: '', body: '' });
  const [errors, setErrors] = useState({ title: '', body: '' });
  const router = useRouter();
  const [errorStatusCode, setErrorStatusCode] = useState<number | null>(null);

  const handleTitleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClearError = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.title.trim() === '') {
      setErrors((prevState) => ({
        ...prevState,
        title: 'Title should not be empty',
      }));
    }

    if (formData.body.trim() === '') {
      setErrors((prevState) => ({
        ...prevState,
        body: 'Body should not be empty',
      }));
    }

    if (formData.title.trim() !== '' && formData.body.trim() !== '') {
      const response = await apiService.createPost({
        title: formData.title.trim(),
        body: formData.body.trim(),
      });

      if (response.status < 400) {
        router.push('/posts/[id]', `/posts/${response.data.id}`);
      } else {
        setErrorStatusCode(response.status);
      }
    }
  };

  if (errorStatusCode) {
    return <Error statusCode={errorStatusCode} />;
  }

  return (
    <Layout>
      <Head>
        <title>Create New Post</title>
      </Head>
      <HeadText>Create post</HeadText>

      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          name="title"
          placeholder="input title here"
          maxLength={50}
          onChange={handleTitleInput}
          onFocus={handleClearError}
        />

        <ErrorMessage>{errors.title}</ErrorMessage>

        <TextAreaStyled
          name="body"
          placeholder="input text here"
          onChange={handleTitleInput}
          onFocus={handleClearError}
          rows={5}
        />

        <ErrorMessage>{errors.body}</ErrorMessage>

        <ButtonStyled type="submit">Create post</ButtonStyled>
      </FormStyled>
    </Layout>
  );
};

export default NewPostPage;

const HeadText = styled.h1`
  text-align: center;
`;

const FormStyled = styled.form`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 70%;
  min-width: 290px;
`;

const InputStyled = styled.input`
  width: 100%;
  font-size: 15px;
  padding: 3px;
  margin: 10px 0;
  box-sizing: border-box;
`;

const TextAreaStyled = styled.textarea`
  font-size: 12px;
  padding: 3px;
  min-width: 100%;
  max-width: 100%;
  margin: 10px 0;
  box-sizing: border-box;
`;

const ButtonStyled = styled.button`
  align-self: center;
  width: 100px;
  margin-bottom: 10px;
  font-size: 15px;
  background-color: #fff;
  border: 2px solid grey;
  border-radius: 4px;

  :hover {
    color: red;
    background-color: grey;
    cursor: pointer;
  }
`;

const ErrorMessage = styled.p`
  color: red;
`;

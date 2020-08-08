import axios, { AxiosPromise } from 'axios';

class ApiService {
  instance = axios.create({
    baseURL: 'https://simple-blog-api.crew.red/',
  })

  getLatestPost = (): AxiosPromise<DevelopsToday.Post[]> => this.instance('/posts');

  getPostById = (id: string): AxiosPromise<DevelopsToday.Post> => this.instance(`/posts/${id}`);

  createPost = (data: {title: string; body: string}): AxiosPromise<DevelopsToday.Post> =>
    this.instance({ url: '/posts', method: 'POST', data });
}

export const apiService = new ApiService();

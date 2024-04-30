import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'

const News = () => {

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=631ecba6fae64532ae8b8b8169ad4870');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  // const { data, isError, error, isLoading }: any = useQuery(['article'] as QueryKey, () => fetchNews());
  const { data, isError, error, isLoading }: any = useQuery({
    queryKey: ['article'],
    queryFn: () => fetchNews(),
  })


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Link to={'/'}>Back</Link>
      <h1>Top Headlines</h1>

      <ul>
        {data.articles.map((news: any, index: number) => (
          <li key={index}>
            <h2>{news.title}</h2>
            <p>{news.description}</p>
            <a href={news.url}>Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;

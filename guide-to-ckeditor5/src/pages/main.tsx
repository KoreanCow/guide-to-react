import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IPost } from '../redux/actions/postAction';
import './main.scss';

const Main = () => {
  const reduxPosts = useSelector((state: { post: IPost[] }) => state.post);

  const reversedPosts = reduxPosts.slice().reverse();

  const [posts, setPosts] = useState<IPost[]>([]);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);

  useEffect(() => {

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = reversedPosts.slice(indexOfFirstPost, indexOfLastPost);
    setPosts(currentPosts);
  }, [currentPage, postsPerPage]);

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/write');
  };

  return (
    <div className='main__main_container'>
      <p>Main page</p>
      <div className='main__post_list'>
        {posts.map((post) => (
          <p className='main__post' key={post.id}>
            <Link to={`/${post.id}`}>{post.title}</Link>
          </p>
        ))}
      </div>
      <div className='pagination'>
        {[...Array(Math.ceil(reversedPosts.length / postsPerPage))].map((_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      <button className='main__write_btn' onClick={onClickHandler}>
        글쓰러 가기
      </button>
    </div>
  );
};

export default Main;

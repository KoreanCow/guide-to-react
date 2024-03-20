import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IPost } from '../redux/actions/postAction'


const Main = () => {
  const reduxPosts = useSelector((state: { post: IPost[] }) => state.post);
  const [posts, setPosts] = useState<IPost[]>(reduxPosts);
  console.log(reduxPosts)
  useEffect(() => {
    setPosts(reduxPosts);
  }, [reduxPosts])


  const navigate = useNavigate();

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/write');
  }

  return (
    <div>
      main page
      <button onClick={onClickHandler}>글쓰러 가기</button>
      {posts.map((post) => (
        <p key={post.id}>
          <Link to={`/${post.id}`}>
            {post.title}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default Main

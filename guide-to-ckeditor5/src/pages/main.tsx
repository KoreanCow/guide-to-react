import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IPost } from '../redux/actions/postAction'


const Main = () => {
  const reduxPosts = useSelector((state: { post: IPost[] }) => state.post);
  const [posts, setPosts] = useState<IPost[]>(reduxPosts);
  console.log(reduxPosts)
  useEffect(() => {
    setPosts(reduxPosts);
  }, [reduxPosts])

  // console.log(posts);
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
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default Main

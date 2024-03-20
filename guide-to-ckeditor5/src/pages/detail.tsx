import React from 'react'
import { useSelector } from 'react-redux';
import { IPost } from '../redux/actions/postAction'
import { useLocation, useNavigate } from 'react-router-dom';

import parse from 'react-html-parser';

const Detail = () => {
  const query = useLocation().pathname.substring(1);
  const navigate = useNavigate();
  const reduxPost = useSelector((state: { post: IPost[] }) => {
    return state.post.filter(post => post.id === query);
  })
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/');
  }

  console.log(parse(reduxPost[0].contents))
  return (
    <div>
      <button onClick={onClickHandler}>
        돌아가기
      </button>
      <p>id: {reduxPost[0].id}</p>
      <p>title: {reduxPost[0].title}</p>
      <div>{parse(reduxPost[0].contents)}</div>
      <span>contents: {reduxPost[0].contents}</span>
    </div>
  )
}

export default Detail

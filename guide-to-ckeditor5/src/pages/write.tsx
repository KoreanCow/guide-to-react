import React, { useState } from 'react'
import EditorSet from '../components/EditorSet';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { posting } from '../redux/actions/postAction';

import { IPost } from '../redux/actions/postAction'
export interface IForm {
  title: string;
  contents: string;
}

const Write = () => {
  const reduxPosts = useSelector((state: { post: IPost[] }) => state.post);
  const navigate = useNavigate();
  const [datas, setDatas] = useState<IForm>({
    title: '',
    contents: '',
  });
  const dispatch = useDispatch();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newDatas = { id: (reduxPosts.length + 1).toString(), ...datas }
    dispatch(posting(newDatas));

    alert('등록성공')
    setDatas({
      title: '',
      contents: '',
    });
    navigate('/');
  }
  return (
    <div>
      <p>write page</p>
      <form onSubmit={onSubmitHandler}>
        <input type='text'
          placeholder='Title'
          value={datas.title}
          onChange={(e) => setDatas(prevState => ({ ...prevState, title: e.target.value }))}
        />
        <EditorSet
          datas={datas}
          setDatas={setDatas}
        />
        <button type='submit'>작성</button>
        <button onClick={() => navigate('/')}>작성취소</button>
      </form>
    </div>
  )
}

export default Write

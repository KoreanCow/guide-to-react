import React from 'react'

const SkeletonBtn = () => {
  return (
    <>
      <button className='question-answer-btn'>
        <div className='SkeletonContainer'>
          <span className='LoadingTextd'>S</span>
          <span className='LoadingTextd'>k</span>
          <span className='LoadingTextd'>e</span>
          <span className='LoadingTextd'>l</span>
          <span className='LoadingTextd'>e</span>
          <span className='LoadingTextd'>t</span>
          <span className='LoadingTextd'>o</span>
          <span className='LoadingTextd'>n</span>
        </div>
      </button>
    </>
  )
}

export default SkeletonBtn

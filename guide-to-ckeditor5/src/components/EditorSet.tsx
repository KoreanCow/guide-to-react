import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import React from 'react'
import { IForm } from '../pages/write'

const EditorSet = ({ datas, setDatas }:
  {
    datas: IForm,
    setDatas: any
  }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={datas.contents}
      onReady={editor => {
        console.log(' Editor is ready to use!', editor);
      }}
      onChange={(event, editor) => {
        const newContent = editor.getData();
        setDatas((prevState: any) => ({
          ...prevState,
          contents: newContent
        }))
        console.log(datas)
      }}
      onBlur={(event, editor) => {
        console.log('Blur. ', editor)
      }}
      onFocus={(event, editor) => {
        console.log('Focus', editor);
      }}
    />
  )
}

export default EditorSet

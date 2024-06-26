import React, { Dispatch, SetStateAction } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import 'styles/ckeditor.css'
import { AddArticleType } from 'types/community-type/ArticleType'
import { AddAnnounceType } from 'types/community-type/announceType'
import { AddTogetherType } from 'types/community-type/togetherType'
import { ContactInputValue } from 'types/advertiseType'
import { utilService } from 'services/community/utilService'
import { useParams } from 'react-router-dom'

interface Props<T> {
  inputValue?: T
  setInputValue: Dispatch<SetStateAction<T>>
  doNotSaveThumbnail?: boolean
}

// 제네릭 클래스 함수 컴포넌트
const CkEditor = <
  T extends AddArticleType | AddAnnounceType | AddTogetherType | ContactInputValue,
>({
  inputValue,
  setInputValue,
  doNotSaveThumbnail,
}: Props<T>) => {
  const { aptId } = useParams()

  // eslint-disable-next-line
  const customUploadAdapter = (loader: any) => {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          try {
            const formData = new FormData()
            loader.file.then(async (file: File) => {
              formData.append('file', file)

              const response = await utilService.getImgUrl({
                aptId: aptId as string,
                file: formData,
              })

              resolve({
                default: response,
              })
              if (doNotSaveThumbnail) return
              setInputValue((prevState) => ({
                ...prevState,
                thumbnail: response,
              }))
            })
          } catch (error) {
            reject(error)
          }
        })
      },
    }
  }

  // eslint-disable-next-line
  function uploadPlugin(editor: any) {
    // eslint-disable-next-line
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
      return customUploadAdapter(loader)
    }
  }

  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        extraPlugins: [uploadPlugin],
      }}
      data={
        inputValue?.content ||
        '<p>작성하실 내용을 입력해주세요.</p><p>이미지를 붙여넣거나, 드래그하여 첨부할 수 있습니다.</p>'
      }
      // onReady={(editor) => {
      //   // console.log('Editor is ready to use!', editor);
      // }}
      onChange={(event, editor: ClassicEditor) => {
        const data = editor.getData()
        setInputValue((prevState) => ({ ...prevState, content: data }))
      }}
      // onBlur={(event, editor) => {
      //   // console.log('Blur.', editor);
      // }}
      // onFocus={(event, editor) => {
      //   // console.log('Focus.', editor);
      // }}
    />
  )
}

export default CkEditor

// 제네릭 클래스 컴포넌트 (학습 참고용)
// testclass CkEditor<T> extends Component<Props<T>> {
//   render() {
//     return (
//       <CKEditor
//         editor={ClassicEditor}
//         // data="<p>Hello from CKEditor&nbsp;5!</p>" // 초기값. 필요시 주석 해제
//         onReady={
//           (/* editor */) => {
//             // You can store the "editor" and use when it is needed.
//             //   console.log('Editor is ready to use!', editor)
//           }
//         }
//         onChange={(event, editor) => {
//           const data = editor.getData()
//           //   console.log({ event, editor, data })
//           this.props.setInputValue((prevState) => ({ ...prevState, content: data }))
//         }}
//         onBlur={
//           (/* event, editor */) => {
//             //   console.log('Blur.', editor)
//           }
//         }
//         onFocus={
//           (/* event, editor */) => {
//             //   console.log('Focus.', editor)
//           }
//         }
//       />
//     )
//   }
// }

// export default CkEditor

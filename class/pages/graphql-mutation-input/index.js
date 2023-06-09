import { useState } from 'react';
import {gql, useMutation} from '@apollo/client'

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents:String ){   #변수의 타입 적는 곳
   createBoard(writer:$writer, title:$title, contents :$contents){            # 실제 우리가 전달할 변수 적는 곳
      _id
      number
      message
   }
  } 
`

export default function GraphqlMutationPage(){

   const [writer, setWriter] = useState("")
   const [title, setTitle] = useState("")
   const [contents, setContents] = useState("")

   const [나의함수] = useMutation(CREATE_BOARD)

   const onClickSubmit = async () =>{
      const result = await 나의함수({
         variables:{ //variables : 이게 $역할
            writer: writer,
            title: title,
            contents : contents
         }
      })
      console.log(result)
      alert(result.data.createBoard.message)
   }

   const onChangeWriter = (event) =>{
      setWriter( event.target.value )
   }

   const onChangeTitle = (event) =>{
      setTitle( event.target.value )
   }

   const onChangeContents = (event) =>{
      setContents( event.target.value )
   }


   return (
      <>
         작성자 : <input type='text' onChange={onChangeWriter}></input>
         제목 : <input type='text' onChange={onChangeTitle}></input>
         내용 : <input type='text' onChange={onChangeContents}></input>
         <button onClick={onClickSubmit}>GRAPHQL-API(동기)요청하기</button>
      </>
   );
};


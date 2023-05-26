import React from 'react';
import { useState } from 'react';
import {gql, useMutation} from '@apollo/client'

import BoardWriteUI from './BoardWrite.presenter';

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents:String ){   #변수의 타입 적는 곳
   createBoard(writer:$writer, title:$title, contents :$contents){            # 실제 우리가 전달할 변수 적는 곳
      _id
      number
      message
   }
  } 
`
export default function BoardWrite(){


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
}

   return (
      <BoardWriteUI
         aaa={onClickSubmit}
         bbb={onChangeWriter}
         ccc={onChangeTitle}
         ddd={onChangeContents} 
      />
   );



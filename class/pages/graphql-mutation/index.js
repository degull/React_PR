import { useMutation, gql } from '@apollo/client';
import React from 'react';

const CREATE_BOARD = gql`
   mutation {
      createBoard(writer:"철수", title:"제목임", contents : "내용임")
         _id
         number
         message
   }
`

export default function GraphqlMutationPage1(){

   const [나의함수] = useMutation

   const onClickSubmit= async ()=>{
      const result = await 나의함수()
      console.log(result)
      alert(result.data.CREATE_BOARD.message)
   }

   return (
      <>
         <button onClick={onClickSubmit}>Graphql-API 요청하기</button>
      </>
   );
};


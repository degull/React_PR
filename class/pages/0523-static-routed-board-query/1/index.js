import { useQuery, gql } from '@apollo/client';
import React from 'react';


// FETCH_BOARD => 조회
const FETCH_BOARD = gql`
   query fetchBoard($number:Int){   
      fetchBoard(number :$number){
         writer
         title
         contents
      }
   }
`

export default function StaticRoutedPage(){
   const {data} = useQuery(FETCH_BOARD, {
      variables : {number : 1}
   })

   console.log(data)

   return (
      <>
         <div>1번 게시글로 이동 완료</div>
         <div>작성자 : {data ? data.fetchBoard.writer : "로딩 중.."}</div>
         <div>제목 : {data && data.fetchBoard.title}</div>
         <div>내용 : {data?.fetchBoard.contents}</div>
      </>
   );
};


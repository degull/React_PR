import React from 'react';
import {useQuery, gql} from '@apollo/client'
import { useRouter } from 'next/router';

const FETCH_BOARD = gql`
   query fetchBoard($number:Int){
      fetchBoard(number:$number){
         writer
         title
         contents
      }
   }
`

export default function StaticRoutedPage(){

   const router = useRouter()


   const {data} = useQuery(FETCH_BOARD, {
      variables : {number : Number(router.query.qqq)}
   })

   return (
      <>
         <div>{router.query.qqq}번 게시글로 이동 완료</div>
         <div>작성자 : {data ? data.fetchBoard.writer : "로딩중..."}</div>
         <div>제목 : {data && data.fetchBoard.title}</div>
         <div>내용 : {data?.fetchBoard.contents}</div>
      </>
   );
};


// <div>작성자 : {data ? data.fetchBoard.writer : "로딩중..."}</div>
// 이 줄은 data 객체가 존재하는 경우에는 data.fetchBoard.writer 값을 출력하고,
// data 객체가 존재하지 않는 경우에는 "로딩중..."을 출력합니다. 
// 즉, 데이터를 성공적으로 가져온 경우 작성자의 이름을 표시하고, 데이터를 아직 가져오지 못한 경우 "로딩중..."을 표시합니다.

// <div>제목 : {data && data.fetchBoard.title}</div>
// 이 줄은 data 객체와 data.fetchBoard 객체가 모두 존재하는 경우에만 data.fetchBoard.title 값을 출력합니다.
// 데이터를 가져오지 못한 경우에는 data 객체가 null이므로 이 줄은 무시됩니다.
// 즉, 데이터를 성공적으로 가져온 경우에만 제목을 표시합니다.

// <div>내용 : {data?.fetchBoard.contents}</div>
// 이 줄은 data 객체와 data.fetchBoard 객체가 모두 존재하는 경우에만 data.fetchBoard.contents 값을 출력합니다. 
// ?. 연산자는 옵셔널 체이닝 연산자로, 객체가 존재하지 않는 경우에는 undefined를 반환하며 오류를 방지합니다.
// 따라서 데이터를 성공적으로 가져온 경우에만 내용을 표시합니다.

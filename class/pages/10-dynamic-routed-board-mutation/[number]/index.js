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
   console.log(router)
   console.log(router.query.number)


   const {data} = useQuery(FETCH_BOARD, {
      variables : {number : Number(router.query.number)}
   })

   console.log("========")
   console.log(data)
   console.log("========")

   return (
      <>
         <div>{router.query.number}번 게시글로 이동 완료</div>
         <div>작성자 : {data ? data.fetchBoard.writer : "로딩 중.."}</div>
         <div>제목 : {data && data.fetchBoard.title}</div>
         <div>내용 : {data?.fetchBoard.contents}</div>
      </>
   )
}

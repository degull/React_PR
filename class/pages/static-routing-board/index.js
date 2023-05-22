import { useRouter } from 'next/router';
import React from 'react';



export default function StaticRoutingPage(){

   const router = useRouter()

   const onClickMove1 = () =>{
      router.push("/static-router-board/1")
   }
   const onClickMove2 = () =>{
      router.push("/static-router-board/2")
   }
   const onClickMove3 = () =>{
      router.push("/static-router-board/3")
   }

   return (
      <>
         <button onClick={onClickMove1}>1번 게시글 이동하기</button>
         <button onClick={onClickMove2}>2번 게시글 이동하기</button>
         <button onClick={onClickMove3}>3반 게시글 이동하기</button>
      </>
   );
};


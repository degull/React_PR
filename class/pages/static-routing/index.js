import { useRouter } from 'next/router';
import React from 'react';



export default function StaticRoutingPage(){

   const router = useRouter()

   const onClickMove = () =>{
      router.push("/static-routed")
   }

   return (
      <>
         <button onClick={onClickMove}>페이지 이동하기</button>
      </>
   );
};


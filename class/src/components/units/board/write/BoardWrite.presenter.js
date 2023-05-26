import React from 'react';

export default function BoardWriteUI(props){

   //javascript 영역

   return (
      <>
         작성자 : <input type='text' onChange={props.bbb}></input>
         제목 : <input type='text' onChange={props.ccc}></input>
         내용 : <input type='text' onChange={props.ddd}></input>
         <button onClick={props.aaa}>GRAPHQL-API(동기)요청하기</button> 
      </>
   );
};


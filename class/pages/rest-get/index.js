import React from 'react';
import axios from 'axios';
import {useState} from 'react';

export default function RestGetPage(){

   const [title, setTitle] = useState("")

   /* 비동기 */
   function onClickAsync(){
      const result = axios.get("https://koreanjson.com/posts/1")
      console.log(result)
   }

   /* 동기 */
   // async function onClickSync(){    => 원래방식
      const onClickSync = async () => {
      const result = await axios.get("https://koreanjson.com/posts/1")
      /* console.log(result)
      console.log(result.data)
      console.log(result.data.title) */
      setTitle(result.data.title)
   }

   return (
      <>
         <button onClick={onClickAsync}>REST-API 비동기 요청하기</button>
         <button onClick={onClickSync}>REST-API 동기 요청하기</button>
         <div>{title}</div>
      </>
   );
};


import React from 'react';
import { useState } from 'react';

export default function CounterStatePage(){

   const [count, setCount] = useState(0)     // let count = 0
                                             // count는 state, useState는 함수

   function onClickCountUp(){
      setCount(count+1)    // count = count + 1 
   }

   function onClickCountDown(){
      setCount(count-1)    // count = count +1
   }





   return (
      <>
        <div>{count}</div>    {/* count는 {}를 통해 변수로 사용 */}
        <button onClick={onClickCountUp}>카운트 올리기</button> 
        <button onClick={onClickCountDown}>카운트 내리기</button> 
      </>
   );
};


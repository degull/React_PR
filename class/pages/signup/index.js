import React from 'react';
import { useState } from 'react';

export default function signUpPage(){

   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const [emailError, setEmailError] = useState("")
   const [PasswordError, setPasswordError] = useState("")

   function onChangeEmail(event){
      /*
      console.log(event)   // 행동
      console.log(event.target) // 작동된 태그
      console.log(event.target.value)  // 작동된 태그에 입력된 값
      */
      setEmail(event.target.value)
   }

   function onChangePassword(event){
      setPassword(event.target.value)
   }

   function onClickSignUp(){

      // data 확인
      console.log(email)
      console.log(password)


      
      // 검증하기
      if (email.includes("@") === false){
         document.getElementById("error_email").innerText = "이메일이 올바르지 않습니다."
      }
      else {
         // Backend 컴퓨터에 있는 API(함수) 요청하기
         alert("회원가입 축하")
      }
   }



   return (
      <>
        이메일 : <input type='text' onChange={onChangeEmail} /> 
        <div id='error_email'></div>
        비밀번호 : <input type='password' onChange={onChangePassword} />
        <button onClick={onClickSignUp}>회원가입</button>
      </>
   );
};


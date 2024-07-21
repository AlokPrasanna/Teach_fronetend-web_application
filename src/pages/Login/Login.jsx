import React, { useState } from 'react';
import { Header } from '../../components/molecules';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const Navigate = useNavigate();
  const [EmailAddress , setEmailAddress] = useState("");
  const [Password , setPassword] = useState("");

  const HandelLoginButton = () => {
    if(!EmailAddress || !Password){
      alert("Please Enter required Fields!");
      return
    }
    Login();
  }

  const Login = async() => {
    const data = {
      email:EmailAddress,
      password:Password
    };

    try {
      const response = await fetch("http://localhost:3300/api/users/login",{
        method:"POST",
        headers:{
          "content-Type" : "application/json"
        },
        body: JSON.stringify(data)
      })

      const Data =  await response.json();
      if(!Data.status){
            alert(Data.error.message);
            return;
      }else{
        Navigate("/user");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='flex flex-col items-center justify-center w-full px-10'>
      <Header />
      <div className='flex flex-col items-center justify-center w-full gap-5 max-w-md h-[50vh] mt-10'>
        <h2 className='text-[20px] text-center font-bold'>Login</h2>
        <input 
          className='w-[100%] h-10  border-b-4 border-black focus:outline-none px-2' 
          type='email' 
          placeholder='Email Address'
          onChange={(e) => setEmailAddress(e.target.value)}

          />
        <input 
          className='w-[100%] h-10  border-b-4 border-black focus:outline-none px-2' 
          type='password' 
          placeholder='Password' 
          onChange={(e) => setPassword(e.target.value)}
          />
        <button
          onClick={HandelLoginButton} 
          className='w-full px-3 py-3 text-black bg-transparent rounded-xl border-[3px] border-orange-500 hover:bg-orange-500 hover:text-white'
          >Login</button>
      </div>
    </div>
  )
}

export default Login;

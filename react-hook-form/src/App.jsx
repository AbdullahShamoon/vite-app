import { useState } from 'react'
import { useForm } from "react-hook-form"


function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting },
  } = useForm()

  const delay =(m) =>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      },m*1000)
    })
  }
  
  const onSubmit = async (data) => {
    await delay(2)  // simulating network delay
    console.log(data)
  }


  return (
    <>
    {isSubmitting && <h2>Loading...</h2>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("username", { required: { value: true, message: "Username is required" }, minLength: { value: 3, message: "Username should be of more than 3 characters" }, maxLength: { value: 10, message: "Username should be of less than 10 characters" } })} type="text" placeholder='Username' /><br />
          {errors.username && <span>{errors.username.message}</span>}
          <br />
          <input {...register("password", { required: { value: true, message: "Password is required" }, minLength: { value: 8, message: "Password should be of more than 8 characters" }, maxLength: { value: 20, message: "Password should be of less than 20 characters" } })} type="password" placeholder='Password' /><br />
          {errors.password && <span>{errors.password.message}</span>}
          <br />
          <input type="submit" disabled={isSubmitting} value="Login" />
        </form>
      </div>
    </>
  )
}

export default App

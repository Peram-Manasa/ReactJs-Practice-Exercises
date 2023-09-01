import React from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';



const schema = yup.object().shape({
    email:yup.string().email().required(),
    password:yup.string().min(8).max(32).required()
})
export const Yup = () => {
    const {register, handleSubmit, formState:{errors}, reset} =useForm({
        resolver:yupResolver(schema)
    });

    const Submit = (data) =>{
        console.log(data);
        reset();
    }

  return (
    <>
    <form  onSubmit={handleSubmit(Submit)}>
        <h1>Login Please </h1>
        <input type="email" placeholder='Email' {...register("email")}/>
        <p>{errors.email?.message}</p>
        <br/>
        <input type="password" placeholder='password' {...register("password")} />
        <p>{errors.password?.message}</p>
        <br/>
        <button>Sign</button>
    </form>
    </>
  )
}

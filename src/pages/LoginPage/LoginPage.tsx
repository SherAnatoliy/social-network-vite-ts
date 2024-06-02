import { Controller, useForm } from "react-hook-form";
import AppButton from "../../components/UI/AppButton/AppButton";
import AppInput from "../../components/UI/AppInput/AppInput";
import AppLink from "../../components/UI/AppLink/AppLink";
import { AppRegistration } from "../../components/UI/AppRegistratoin/AppRegistratoin";
import { SCLoginPage } from "./LoginPage.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";


export const LoginPage = () => {  
const loginFormSchema = yup.object({
  useremail: yup
  .string()
  .email()
  .required("Обазательное поле!"),
  userpassword: yup
  .string()
  .min(4, "Пароль должен содержать  как минимум 4 символа!")
  .required("Обязательное поле!"),
});
    const navigate = useNavigate()
    interface ILoginForm {
      useremail:string,
      userpassword:string
    }
    const onLoginSubmit = (data:ILoginForm ) =>{
      console.log(data);
      if(data){
        navigate("/login-page")
      }
    }
    const {
       control, 
       handleSubmit,
       formState: {errors},
      } = useForm({
        defaultValues:{
          useremail:"",
          userpassword:"",
        },
        resolver:yupResolver(loginFormSchema),
    });
  return (
    
    <SCLoginPage className="LoginPage">
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
     <Controller
       control={control}
       name="useremail" 
       render={({field})=>(
         <AppInput
         isRequired={false}
          inputType="text"
          inputPlaceholder="Введите свой email"
          isError={errors.userpassword ? true : false}
          errorText={errors.useremail?.message}
          {...field}
          
          />
       )}/>
      <Controller
       control={control}
       name="userpassword" render={({field})=>(
        <AppInput 
        isRequired={false}
         inputType="password"
         inputPlaceholder="Пароль" 
         isError={errors.userpassword ? true : false}
         errorText={errors.userpassword?.message}
          {...field}/>
      )}/>
        {/* <input type="tel" placeholder="Номер телефона" /> */}
    
       
        {/* <input type="password" placeholder="Пароль" /> */}
        {/* <button>Войти</button> */}
        <AppButton buttonText="Войти" buttonType="submit" isDisabled={false}/>
      </form>
      {/* <a href="#">Забыли пароль?</a> */}
      <AppLink  linkText="undefined"/>
     <AppRegistration/>
    </SCLoginPage>
  );
};

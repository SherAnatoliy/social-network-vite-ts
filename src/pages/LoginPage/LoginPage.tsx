// import AppButton from "../../components/UI/AppButton/AppButton";
// import AppInput from "../../components/UI/AppInput/AppInput";
// import AppLink from "../../components/UI/AppLink/AppLink";
// import { AppRegistration } from "../../components/UI/AppRegistratoin/AppRegistratoin";
// import "./LoginPage.scss";

// export const LoginPage = () => {
//   return (
//     <SCLoginpage classna
//       <h1>Авторизация</h1>
//       <form action="#">
//         <AppInput 
//         inputType="tel"
//         inputPlaceholder="Номер телефона"
//         />
//         {/* <input type="tel" placeholder="Номер телефона" /> */}
//         <AppInput 
//          inputType="password"
//          inputPlaceholder="Пароль"/>
//         {/* <input type="password" placeholder="Пароль" /> */}
//         {/* <button>Войти</button> */}
//         <AppButton buttonText="Войти" buttonType="submit" isDisabled={false}/>
//       </form>
//       {/* <a href="#">Забыли пароль?</a> */}
//       <AppLink  linkText="undefined"/>
//      <AppRegistration/>
//     </SCLoginpage>
//   );
// };


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
    const { control, handleSubmit } = useForm({
      defaultValues:{
        useremail:"",
        userpassword:""
      }
    })
  return (
    <SCLoginPage className="LoginPage">
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
     <Controller
       control={control}
       name="useremail" render={({field})=>(
         <AppInput 
          inputType="email"
          inputPlaceholder="Введите свой email"{...field} />
       )}/>
      <Controller
       control={control}
       name="userpassword" render={({field})=>(
        <AppInput 
         inputType="password"
         inputPlaceholder="Пароль" {...field}/>
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

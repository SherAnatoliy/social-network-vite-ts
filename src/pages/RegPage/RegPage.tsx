import { Controller, useForm } from "react-hook-form";
import AppButton from "../../components/UI/AppButton/AppButton";
import AppInput from "../../components/UI/AppInput/AppInput";
import { SCRegPage } from "./RegPage.style";
import { useNavigate } from "react-router-dom";

export const RegPage = () => {
  const navigate = useNavigate()
    interface IRegistrationForm {
      useremail:string,
        userpassword:string,
        username:string,
        phone_number:string,
        password:string,
        user_city:string
    }
    const onRegistrationSubmit = (data:IRegistrationForm ) =>{
      console.log(data);
      if(data){
        navigate("/")
      }
    }
    const { control, handleSubmit } = useForm({
      defaultValues:{
        useremail:"",
        userpassword:"",
        username:"",
        phone_number:"",
        password:"",
        user_city:""
      }
    })
  return (
    <SCRegPage className="RegPage">
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit(onRegistrationSubmit)}>

      <Controller
       control={control}
       name="username" render={({field})=>(
         <AppInput 
          inputType="name"
          inputPlaceholder="Введите своё имя"{...field} />
       )}/>

      <Controller
       control={control}
       name="useremail" render={({field})=>(
         <AppInput 
          inputType="email"
          inputPlaceholder="Введите свой email"{...field} />
       )}/>
      
      <Controller
       control={control}
       name="phone_number" render={({field})=>(
         <AppInput 
          inputType="phone_number"
          inputPlaceholder="Номер телефона"{...field} />
       )}/>
      
 
      <Controller
       control={control}
       name="password" render={({field})=>(
         <AppInput 
          inputType="password"
          inputPlaceholder="Пароль"{...field} />
       )}/>
      
      <Controller
       control={control}
       name="user_city" render={({field})=>(
         <AppInput 
          inputType="user_city"
          inputPlaceholder="Город"{...field} />
       )}/>

        
        <AppButton buttonText="Зарегестрироватся" buttonType="submit" isDisabled={false}/>
      </form>
    </SCRegPage>
  );
};

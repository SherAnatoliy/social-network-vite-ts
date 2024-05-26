import AppButton from "../../components/UI/AppButton/AppButton";
import AppInput from "../../components/UI/AppInput/AppInput";
import AppLink from "../../components/UI/AppLink/AppLink";
import { AppRegistration } from "../../components/UI/AppRegistratoin/AppRegistratoin";
import "./LoginPage.scss";

export const LoginPage = () => {
  return (
    <div className="LoginPage">
      <h1>Авторизация</h1>
      <form action="#">
        <AppInput 
        inputType="tel"
        inputPlaceholder="Номер телефона"
        />
        {/* <input type="tel" placeholder="Номер телефона" /> */}
        <AppInput 
         inputType="password"
         inputPlaceholder="Пароль"/>
        {/* <input type="password" placeholder="Пароль" /> */}
        {/* <button>Войти</button> */}
        <AppButton buttonText="Войти" buttonType="submit" isDisabled={false}/>
      </form>
      {/* <a href="#">Забыли пароль?</a> */}
      <AppLink  linkText="undefined"/>
     <AppRegistration/>
    </div>
  );
};

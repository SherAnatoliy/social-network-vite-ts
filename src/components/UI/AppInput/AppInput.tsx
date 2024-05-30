import { SCAppInput } from "./AppInput.style";
interface TOAppInput extends React.InputHTMLAttributes<HTMLInputElement> {
    inputType:| "password"| "name" | "user_city"  | "email"| "text"| "phone_number"  ;
    inputPlaceholder:string
}

const AppInput = ({inputType, inputPlaceholder , ...props}:TOAppInput) => {
    return (
        <SCAppInput type={inputType} placeholder={ inputPlaceholder} {...props}/>
    );
};

export default AppInput;
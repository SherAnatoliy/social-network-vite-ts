import { SCAppInput } from "./AppInput.style";
type TOAppInput = {
    inputType:"tel"| "password"| "name" | "surname";
    inputPlaceholder:string
}

const AppInput = ({inputType, inputPlaceholder}:TOAppInput) => {
    return (
        <SCAppInput type={inputType} placeholder={ inputPlaceholder} />
    );
};

export default AppInput;
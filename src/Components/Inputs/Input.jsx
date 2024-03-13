import Input from './Input';
import './Components/Inputs/Input.css'
export default function InputComponent(props) {
    return (
        <>
          <Input defaultValue={props.input || "Add"} type="text" />
        </>
      );
}


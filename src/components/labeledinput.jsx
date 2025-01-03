import Input from "./input";
import Label from "./label";

const LabeledInput = (props) => {
  // eslint-disable-next-line react/prop-types
  const { label, name, type, placeholder, register } = props;

  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} register={register}/>
    </div>
  );
};

export default LabeledInput;
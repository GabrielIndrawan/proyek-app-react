import { Link } from "react-router-dom";
import Button from "../components/button"
import Checkbox from "../components/checkbox"
import LabeledInput from "../components/labeledinput"
import { useForm } from "react-hook-form";

const FormSignIn = () =>
  {

    const {
      register,
      handleSubmit,
      formState: {errors, isValid}
    } = useForm({
      mode: "onChange",
    })

    const onFormSubmit = (data) => {console.log(data)}
    const onErrors = (errors) => {console.error(errors)}

    return (
    <div className="mt-16">
          <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
            <div className="mb-6">
              <LabeledInput type="email" name="email" label ="email" placeholder="hello@example.com"
              register={{
                ...register("email",{
                  required: "Email Address is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address format"
                  }
                })
              }}
              />
              {
                errors?.email && (<div className="text-center text-red-500">{errors.email.message}</div>)
              }
            </div>
            <div className="mb-6">
              <LabeledInput type="password" name="password" label="password" placeholder="hello@example.com"
              register={
                {
                  ...register("password",{
                    required: "Password is required"
                  })
                }
              }
              />
              {
                errors?.password && (<div className="text-center text-red-500">{errors.password.message}</div>)
              }
            </div>
            <div className="mb-3">
              <Checkbox label="Keep me signed In"/>
            </div>
            <Button 
            variant={
              !isValid?
              "bg-gray-05 w-full text-white"
              :
              "bg-primary w-full text-white"
            }
            disabled={isValid? "disabled" : ""}>Login</Button>
          </form>
    </div>
    );
  };

export default FormSignIn;
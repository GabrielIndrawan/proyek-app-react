import { useNavigate } from "react-router-dom";
import Button from "../components/button"
import Checkbox from "../components/checkbox"
import LabeledInput from "../components/labeledinput"
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext,} from "react";
import CustomizedSnackbars from "../components/SnackBar";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../context/authContext";
import { NotifContext } from "../context/notifContext";

const FormSignIn = () =>
  {
    const navigate = useNavigate()
    const {setMsg, msg, setOpen, setIsLoading} = useContext(NotifContext)
    const {setIsLoggedIn, setName} = useContext(AuthContext)

    const {
      register,
      handleSubmit,
      formState: {errors, isValid}
    } = useForm({
      mode: "onChange",
    })

    const onFormSubmit = async (data) => {
      try {
        setIsLoading(true)
        const response = await axios.post(
          "https://jwt-auth-eight-neon.vercel.app/login",
          {
            email: data.email,
            password: data.password,
          }
        );
        
        const decoded = jwtDecode(response.data.refreshToken);
        setIsLoggedIn(true)
        setName(decoded.name)
        setIsLoading(false)
        setOpen(true)
        setMsg({severity: "success", desc: "Login success"})
        localStorage.setItem("refreshToken", response.data.refreshToken)
        localStorage.setItem("username", decoded.name)
        navigate("/")
      } catch (error) {
        setIsLoading(false)
        if (error.response) {
          setOpen(true)
          setMsg(error.response.data.msg)
        }
      }
    };

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
              <LabeledInput type="password" name="password" label="password" placeholder="*************"
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
              "bg-primary w-full text-white zoom-in"
            }
            disabled={isValid? "disabled" : ""}>Login</Button>
            {msg && (
              <CustomizedSnackbars
                severity={msg.severity}
                message={msg.desc}
                open={open}
                setOpen={setOpen}
              />
            )}
          </form>
    </div>
    );
  };

export default FormSignIn;
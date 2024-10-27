import FormSignIn from "../fragments/formSignIn"
import Authlayout from "../layouts/Authlayout"

const SignIn = () => {
    return (
        <Authlayout type="sign in">
            <FormSignIn/>
        </Authlayout>
    )
}

export default SignIn;
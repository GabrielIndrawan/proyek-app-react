import InfoText from "../components/infoText"
import Logo from "../components/logo"
import Title from "../components/title"

const ForgetLayout = (props) => {
    const {children} = props
    return (
        <div className="flex justify-center min-h-screen items-center bg-special-mainBg">
            <div className="w-full max-w-sm">
                <Logo/>
                <div>
                    <Title>
                        Forgot password?
                    </Title>
                </div>
                <div>
                    <InfoText>
                        Enter your email address to get the password reset link.
                    </InfoText> 
                </div>
                <div className="mt-16">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ForgetLayout;
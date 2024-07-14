import logo from '../assets/images/logo.svg'
import LoginPopup from "../components/LoginPopup"

export default function Login() {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div>
                <img className="m-auto mb-[50px]" src={logo}></img>
                <LoginPopup />
            </div>
        </div>
    )
}
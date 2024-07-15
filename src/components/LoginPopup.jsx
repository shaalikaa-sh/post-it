import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import '../assets/css/animations.scss'
import hidePass from '../assets/images/hide-pass.png'
import viewPass from '../assets/images/view-pass.png'
import UserContext from "../utils/UserContext"
import RegistrationPopup from "./RegistrationPopup"

export default function LoginPopup({ isCloseBtnVisible = false, onClose, showRegisterOption = true }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isLoginInvalid, setIsLoginInvalid] = useState(false)
    const [isFormInvalid, setIsFormInvalid] = useState(false)
    const [registrationPopupVisible, setRegistrationPopupVisible] = useState(false)
    const { setUserName } = useContext(UserContext)
    const navigate = useNavigate()

    const login = () => {
        if (!username || !password) {
            setIsFormInvalid(true)
            return
        }
        if (username === 'user' && password === 'user') {
            localStorage.setItem("username", username)
            localStorage.setItem("password", password)
            setIsLoginInvalid(false)
            setIsFormInvalid(false)
            setUserName(username)
            navigate("/home")
            isCloseBtnVisible && onClose(true)
        } else {
            setIsLoginInvalid(true)
            setIsFormInvalid(false)
        }
    }

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    const toggleRegistrationPopup = (val) => {
        setRegistrationPopupVisible(val)
    }
    return (
        <>
            <div className="animate-slide-up p-[24px] h-[430px] w-[500px] bg-grey-2 border-2 border-solid rounded-lg relative">
                {isCloseBtnVisible && (<div className="absolute top-3 right-4 bg-gray-900 p-2 rounded-full w-[30px] h-[30px] pl-[11px] pt-[2px] text-white cursor-pointer" onClick={onClose.bind(null, false)}>x</div>)}
                <div className="mb-[45px] text-center">
                    <div className="text-grey-1">
                        Welcome back
                    </div>
                    <div className="font-semibold text-white">
                        Log into your account
                    </div>
                </div>
                <div>
                    <div className="mb-[16px] text-grey-4">
                        <div>
                            Email or username
                        </div>
                        <div className="mt-1">
                            <input maxLength="50" className="w-fill-available bg-grey-2 border-solid border-[1px] border-grey-3 rounded p-2"
                                placeholder="Enter your email or username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-[16px] text-grey-4">
                        <div>
                            <div className="flex justify-between">
                                <div>
                                    Password
                                </div>
                                <div className="cursor-pointer">
                                    Forgot password?
                                </div>
                            </div>
                            <div className="mt-1 relative">
                                <input maxLength="20" type={isPasswordVisible ? 'text' : 'password'} className="w-fill-available bg-grey-2 border-solid border-2 border-grey-3 rounded p-2"
                                    placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <div className="absolute top-[50%] right-[0.75rem] translate-y-[-50%] w-[25px] cursor-pointer" onClick={togglePasswordVisibility}>
                                    <img src={isPasswordVisible ? hidePass : viewPass} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button className="btn w-fill-available bg-[#4A96FF] p-3 text-white rounded" type="button" onClick={login}>
                            <span>Login now</span>
                        </button>
                        {isLoginInvalid && <div className="text-red-500 text-sm mt-[8px]">Wrong username or password</div>}
                        {isFormInvalid && <div className="text-red-500 text-sm mt-[8px]">Please fill all the fields</div>}
                    </div>
                    {showRegisterOption && (<div className="mt-5">
                        <span className="text-grey-1">Not registered yet?</span>
                        <span className="text-white ml-2 cursor-pointer" onClick={toggleRegistrationPopup.bind(null, true)}>
                            Register →
                        </span>
                    </div>)}
                </div>
            </div >
            {registrationPopupVisible && (
                <RegistrationPopup isOpen={registrationPopupVisible} onClose={toggleRegistrationPopup.bind(null, false)} />)
            }
        </>
    )
}
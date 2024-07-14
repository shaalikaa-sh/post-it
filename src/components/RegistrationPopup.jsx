import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import hidePass from '../assets/images/hide-pass.png';
import viewPass from '../assets/images/view-pass.png';
import UserContext from "../utils/UserContext";
import LoginPopup from './LoginPopup';
import Overlay from './Overlay';

export default RegistrationPopup = ({ isOpen, onClose, isCloseButtonVisible = true }) => {
    if (!isOpen) return null;

    const [email, setEmail] = useState('')
    const [newUsername, setNewUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isFormInvalid, setIsFormInvalid] = useState(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [loginPopupVisible, setLoginPopupVisible] = useState(false)

    const { setUserName } = useContext(UserContext)

    const navigate = useNavigate()
    const location = useLocation()

    const register = () => {
        if (!email || !newUsername || !password) {
            setIsFormInvalid(true)
            return
        }
        setUserName(newUsername)
        setIsFormInvalid(false)
        localStorage.setItem('username', newUsername)
        onClose()
        navigate("/home")
    }

    const closeLoginPopup = (shouldCloseRegistrationPopup) => {
        toggleLoginPopup(false)
        if (shouldCloseRegistrationPopup) {
            onClose()
        }
    }

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    const toggleLoginPopup = (val) => {
        if (location.pathname === "/login") {
            onClose()
        } else {
            setLoginPopupVisible(val)
        }
    }
    return (
        <>
            <Overlay>
                <div className="relative p-[24px] h-[530px] w-[500px] bg-grey-2 border-[1px] border-solid overflow-auto rounded-lg">
                    {isCloseButtonVisible && <div className="absolute top-3 right-4 bg-gray-900 p-2 rounded-full w-[30px] h-[30px] pl-[11px] pt-[2px] text-white cursor-pointer" onClick={onClose}>x</div>}
                    <div className="mb-[45px] text-center">
                        <div className="text-grey-1">
                            SIGN UP
                        </div>
                        <div className="font-semibold text-white">
                            Create an account to continue
                        </div>
                    </div>
                    <div>
                        <div className="mb-[16px] text-grey-4">
                            <div>
                                Email
                            </div>
                            <div className="mt-1">
                                <input required className="w-fill-available bg-grey-2 border-solid border-2 border-grey-3 rounded p-2"
                                    placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="mb-[16px] text-grey-4">
                            <div>
                                Username
                            </div>
                            <div className="mt-1">
                                <input required className="w-fill-available bg-grey-2 border-solid border-2 border-grey-3 rounded p-2"
                                    placeholder="Choose a preferred username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
                            </div>
                        </div>
                        <div className="mb-[16px] text-grey-4">
                            <div>
                                <div>
                                    Password
                                </div>
                                <div className="mt-1 relative">
                                    <input required type={isPasswordVisible ? 'text' : 'password'} className="w-fill-available bg-grey-2 border-solid border-2 border-grey-3 rounded p-2"
                                        placeholder="Choose a strong password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <div className="absolute top-[50%] right-[0.75rem] translate-y-[-50%] w-[25px] cursor-pointer" onClick={togglePasswordVisibility}>
                                        <img src={isPasswordVisible ? hidePass : viewPass} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <button className="w-fill-available bg-[#4A96FF] p-3 text-white rounded" type="button" onClick={register}>Continue</button>
                        </div>
                        {isFormInvalid && <div className="text-red-500 text-sm mt-[8px]">Please fill all the fields</div>}
                        <div className="mt-5">
                            <span className="text-grey-1">Already have an account?</span>
                            <span className="text-white ml-2 cursor-pointer" onClick={toggleLoginPopup.bind(null, true)}>
                                Login →
                            </span>
                        </div>
                    </div>
                </div>
            </Overlay >
            {loginPopupVisible && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/[0.5] flex justify-center items-center backdrop-blur-md" >
                    <LoginPopup isCloseBtnVisible={true} showRegisterOption={false} onClose={closeLoginPopup} />
                </div>
            )
            }
        </>
    );
};

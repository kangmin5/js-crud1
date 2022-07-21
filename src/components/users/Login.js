import { selectUser, setUserSlice } from "modules/slices";
import Link from "next/link"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import tw from "tailwind-styled-components"


const LoginSpan = tw.span`
    block
    text-sm
    font-medium
    text-slate-700
`
const Login = () => {
    const dispatch = useDispatch();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUserSlice({
            email: email,
            password: password,
            // loggedIn:true
        }))

    }
    return (
    <div className="bg-blue-200">
        <form >
            <div className="flex items-center justify-center min-h-screen">
                <div className="z-20 px-12 py-12 bg-white shadow-xl rounded-2xl">
                    <div>
                        <h1 className="mb-4 text-3xl font-bold text-center cursor-pointer">
                            <Link href="/"><a>LOGIN</a></Link></h1>
                        <p className="mb-8 text-sm font-semibold tracking-wide text-center text-gray-700 cursor-pointer w-80">
                            어서오세요😊</p>
                    </div>
                    <div  onSubmit={handleSubmit}>
                        <label className="block">
                        <LoginSpan>Email</LoginSpan>
                        <input
                            name="email"
                            type="email"
                            placeholder="이메일"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                        <p className="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
                        Please provide a valid email address.
                        </p>
                        </label>
                        <label className="block">
                        <LoginSpan>Password</LoginSpan>
                        <input
                            name="password"
                            type="password"
                            placeholder="비밀번호"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                        </label>
                        <button className="mt-6 ml-8 w-64 py-3 text-xl text-white bg-purple-400 rounded-2xl" type="submit">Login</button>
                    </div>
                    
                    <div className="mt-5 text-center">
                        <hr className="my-6"/>

                        <button className="w-64 py-3 text-xl text-white bg-yellow-400 rounded-2xl" type="submit">
                            Login with Google
                        </button>
                        <hr className="my-4"/>
                        <Link href="#">
                            <a className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800">Forgot Password?</a></Link>
                        <p className="mt-4 text-sm">아직 회원이 아니신가요?  
                            <Link href='/users/join'><a className="underline cursor-pointer">
                                회원가입</a></Link><br/>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    </div>
)

}

export default Login
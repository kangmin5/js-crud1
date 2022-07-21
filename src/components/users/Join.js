import { nanoid } from '@reduxjs/toolkit'
import { setUserSlice } from 'modules/slices'
import { CREATE_USER, UPDATE_USER_BY_ID } from "modules/types";
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import tw from "tailwind-styled-components"


const JoinSpan = tw.span`
    block
    text-sm
    font-medium
    text-slate-700
`
const Join = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    const handleChange = (prop) => (e) => {
        e.preventDefault();
        dispatch(setUserSlice({ ...user, [prop]: e.target.value }))
        handleChange('')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // user.id ===0 ? dispatch(addUsersSlice(user)) : dispatch(editUsersSlice)
        // user.id ===0 ? dispatch(addUsersSlice({...user,id:nanoid(8)})) : dispatch(editUsersSlice(user))
        if (user.name === "" || user.email === "" || user.password === "") {
            alert('*표시의 필드는 채워져야 합니다.')
            return;
        }
        user.id === 0
            ? dispatch({ type: CREATE_USER, user: { ...user, id: nanoid(8) } })
            : dispatch({ type: UPDATE_USER_BY_ID, user })
        dispatch(setUserSlice({
            id : 0,
            name:"",
            email:"",
            password: "",
            mobile:"",
        }))
    }

  return (
      
      <div className="bg-blue-200">
      <form >
          <div className="flex items-center justify-center min-h-screen">
              <div className="z-20 px-12 py-12 bg-white shadow-xl rounded-2xl">
                  <div>
                      <h1 className="mb-4 text-3xl font-bold text-center cursor-pointer">
                          <a>회원가입</a></h1>
                      <p className="mb-8 text-sm font-semibold tracking-wide text-center text-gray-700 cursor-pointer w-80">
                          등록하세요!😊</p>
                  </div>
                  <div>
                    <label className="block">
                        <JoinSpan>Name</JoinSpan>
                        <input
                            name="name"
                            type="text"
                            value={user.name}
                            onChange={handleChange('name')}
                            placeholder="* 이름"
                            className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                        <p className="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
                        적합한 이름을 넣으시오.
                        </p>
                    </label>
                    <label className="block">
                        <JoinSpan>Email</JoinSpan>
                        <input
                            name="email"
                            type="email"
                            value={user.email}
                            onChange={handleChange('email')}
                            placeholder="* 이메일"
                            className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                        <p className="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
                        Please provide a valid email address.
                        </p>
                    </label>
                    <label className="block">
                        <JoinSpan>Password</JoinSpan>
                        <input
                            name="password"
                            type="password"
                            value={user.password}
                            onChange={handleChange('password')}
                            placeholder="* 비밀번호"
                                className="block w-full px-4 py-3 text-sm border rounded-lg outline-none" />
                                <p className="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
                                적합한 비밀번호를 넣으시오.
                                </p>
                    </label>
                    <label className="block">
                        <JoinSpan>mobile</JoinSpan>
                        <input
                            name="mobile"
                            type="text"
                            value={user.mobile}
                            onChange={handleChange('mobile')}
                            placeholder="휴대전화"
                            className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                    </label>
                  </div>
                  
                  <div className="mt-5 text-center">
                          <button className="w-64 py-3 text-xl text-white bg-purple-400 rounded-2xl"
                             onClick={handleSubmit}>가입하기</button>
                      <hr className="my-4"/>
                      <h2 className="mb-3 text-center fs-5 fw-bold">or</h2>

                      <button className="w-64 py-3 text-xl text-white bg-green-400 rounded-2xl" type="submit">
                          Google 계정으로 가입
                      </button>
                      <hr className="my-4"/>
                      <p className="mt-4 text-sm">기존 회원이신가요?  
                          <Link href='/login'><a className="underline cursor-pointer">
                              login</a></Link><br/>
                      </p>
                  </div>
              </div>
          </div>
      </form>
  </div>
  )
}

export default Join
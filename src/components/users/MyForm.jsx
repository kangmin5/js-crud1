import { Button, Container, Input } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { CREATE_USER, UPDATE_USER_BY_ID } from "modules/types";
import { useDispatch, useSelector } from "react-redux";
import { setUserSlice } from "../../modules/slices/userSlice";
import styles from 'styles/user.module.css'

const MyForm = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    const handleChange = (prop) => (e) => {
        e.preventDefault();
        dispatch(setUserSlice({ ...user, [prop]: e.target.value }))
        handleChange('')
    }
    const handleSubmit = () => {
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
            mobile:''
        }))
    }
    return (
        <div className={styles.form}>
            <h3>사용자등록</h3>
            <Container >
                <Input value={user.id} fullWidth disabled />
                <Input onChange={handleChange('name')} type="text" placeholder="* 이름을 입력" value={user.name} fullWidth />
                <Input onChange={handleChange('email')} type="email" placeholder="* email을 입력" value={user.email} fullWidth />
                <Input onChange={handleChange('password')} type="password" placeholder="* 비밀번호를 입력" value={user.password} fullWidth/>
                <Input onChange={handleChange('mobile')} type="text" placeholder="휴대전화번호 입력" value={user.mobile} fullWidth/>
                <Button onClick={handleSubmit} fullWidth variant="contained">submit</Button>
            </Container>
        </div>
    )
}
export default MyForm;
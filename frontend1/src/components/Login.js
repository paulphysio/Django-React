import React, {useState, useEffect} from 'react'
import APIService from '../APIService'
import {useCookies} from 'react-cookie'
import {useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const [isLogin, setIsLogin]=useState(true)
    let navigate = useNavigate()

    useEffect(() => {
        if(token['mytoken']){
            navigate('/blogs')
        }
        
    }, [token, navigate])

    const LoginBtn = ()=>{
        APIService.LoginUser({username, password})
        .then(resp => setToken('mytoken', resp.token))
        .catch(error => console.log(error))
    }
    function RegisterBtn(){
        APIService.RegisterUser({username, password})
        .then(() => LoginBtn())
        .catch(error => alert(error))
    }
    return (
        <div className="App">
            
            {isLogin ?<h1>Please Login</h1>:<h1>Please Register</h1>}
            
            <div className="mb-3">
                <label htmlFor = "username" className="form-label">Username</label>
                <input type="text" className="form-control" placeholder="Username" value = {username} onChange={e =>{setUsername(e.target.value)}}/>
                <label htmlFor = "password" className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Password" value = {password} onChange={e =>{setPassword(e.target.value)}}/><br/>
                {isLogin ?<button className ="btn btn-secondary" onClick={LoginBtn}>Login</button>:<button className ="btn btn-secondary" onClick={RegisterBtn}>Register</button>}                
                <div className="mb-3">
                    {isLogin ? <h5>if you dont't have an account, Please <button onClick={()=> setIsLogin(false)} className ="btn btn-secondary"> Register </button></h5>:<h5>if you have an account, Please <button className ="btn btn-secondary" onClick={()=> setIsLogin(true)}> Login </button></h5>}
                </div>
            </div>
        </div>
    )
}

export default Login

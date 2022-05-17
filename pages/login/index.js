import React from 'react';
import Navbar from '../../src/components/Navbar';
import {useState, useEffect} from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router';

const Login = (props) => {
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const sendData = async(username) => {
        await localStorage.setItem('username', username)
    }

    const checkPage = async() => {
        const data = await localStorage.getItem('username')
        if(data !== null){
            router.push("/dashboard")
        }
    }

    useEffect(()=>{
        checkPage()
    },[])

    const onLogin = (username) => {
        if(!username){
            Swal.fire({
                icon:"warning",
                text:"username tidak boleh kosong!"
            })
        } else if (!password){
            Swal.fire({
                icon:"warning",
                text:"password tidak boleh kosong!"
            })
        } else if(username == 'naufalnadaa' && password == 'pass123'){
            Swal.fire({
                icon:"success",
                text:"Selamat Datang"
            })
            sendData(username)
            router.push('/dashboard')
        }
    }
    return (
        <>
            <Navbar/>
            <div className='box-login'>
                <center>
                    <h2>Masuk</h2>

                    <div style={{ paddingLeft:30, paddingRight:30 }}>
                        <input className='form-control' value={username} onChange={(e)=>setusername(e.target.value)} type={"text"} placeholder="Username" style={{ marginTop:20, marginBottom:10 }}  />
                        <input className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)} type={"password"} placeholder="Password"  />
                        <a href='/forget' style={{ float:"right", marginTop:5}}>Lupa Kata Sandi</a>
                        <button onClick={()=>onLogin(username)} className='btn btn-primary w-100' style={{ marginTop:20 }}>Masuk</button>
                    </div>
                    <div style={{ marginTop:20 }}>
                        <p>Belum Mendaftar? <a href='/register'>Daftar Sekarang</a></p>
                    </div>
                </center>
            </div>
        </>
    );
}

export default Login;
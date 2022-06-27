import React from 'react';
import Navbar from '../../src/components/Navbar';
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link'

const Login = (props) => {
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const sendData = async (username) => {
        await localStorage.setItem('username', username)
    }

    const checkPage = async () => {
        const data = await localStorage.getItem('username')
        if (data !== null) {
            router.push("/dashboard")
        }
    }

    useEffect(() => {
        checkPage()
    }, [])

    const onLogin = (username) => {
        if (!username) {
            Swal.fire({
                icon: "warning",
                text: "username tidak boleh kosong!"
            })
        } else if (!password) {
            Swal.fire({
                icon: "warning",
                text: "password tidak boleh kosong!"
            })
        } else {
            const data = {
                username: username,
                password: password
            }
            axios.post(`http://localhost:6001/user/login`, data).then(
                res => {
                    Swal.fire({
                        icon: "success",
                        text: "Selamat Datang"
                    })
                    sendData(username)
                    router.push('/dashboard')
                }
            ).catch(err => {
                Swal.fire({
                    icon: "error",
                    text: "username atau password salah"
                })
            })
        }
    }
    return (
        <>
            <Navbar />
            <div className='box-login'>
                <center>
                    <h2>Masuk</h2>

                    <div style={{ paddingLeft: 30, paddingRight: 30 }}>
                        <input className='form-control' value={username} onChange={(e) => setusername(e.target.value)} type={"text"} placeholder="Username" style={{ marginTop: 20, marginBottom: 10 }} />
                        <input className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} type={"password"} placeholder="Password" />
                        <Link href={"/forget-password"}>
                            <a href='#' style={{ float: "right", marginTop: 5 }}>Lupa Kata Sandi</a>
                        </Link>
                        <button onClick={() => onLogin(username)} className='btn btn-primary w-100' style={{ marginTop: 20 }}>Masuk</button>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <p>Belum Mendaftar? <a href='/register'>Daftar Sekarang</a></p>
                    </div>
                </center>
            </div>
        </>
    );
}

export default Login;
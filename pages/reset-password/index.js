import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router'
import { logo } from '../../src/assets';

const ResetPass = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const router = useRouter()

    useEffect(()=>{
        let obj = {}
        console.log("object : ",obj)
        if(router.query = {}){
            router.push("/login")
        }
    },[])

    const changePass = async () => {
        if(!password){
            Swal.fire({
                text: "Kata sandi tidak boleh kosong!",
                icon: "warning"
            })
        } else if(!confirmPassword){
            Swal.fire({
                text: "Konfirmasi kata sandi tidak boleh kosong!",
                icon: "warning"
            })
        } else if (password !== confirmPassword){
            Swal.fire({
                text: "Kata sandi tidak sesuai",
                icon: "error"
            })
        } else {
            setEmail(router.query.email)
            const dataUpdate = {
                password: password
            }
            axios.put(`http://localhost:8080/user/update-password?email=${email}`, dataUpdate).then(
                res => {
                    Swal.fire({
                        text: "Berhasil ubah kata sandi",
                        icon: "success"
                    })
                    router.push("/login")
                }
            ).catch(err=>{
                console.log(err)
            })
        }
    }
    return (
        <>
            <div style={{marginTop:100}}>
                <center>
                    <Image
                        src={logo}
                        width={300}
                        height={90}
                        layout={"fixed"}
                    />
                    <p style={{fontSize:18, marginTop:20}}>Atur Ulang Kata Sandi</p>
                    <div style={{paddingLeft:500, paddingRight:500}}>
                        <input className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Kata sandi' />
                        <input className='form-control' style={{marginTop:10}} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder='Konfirmasi Kata sandi' />
                        <button className='btn btn-primary w-100' style={{marginTop:20}} onClick={changePass}>Ubah Kata Sandi</button>
                    </div>
                </center>
            </div>
        </>
    );
}

export default ResetPass;
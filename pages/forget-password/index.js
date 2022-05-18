import React, { useState, useEffect } from 'react';
import Navbar from '../../src/components/Navbar';
import Image from 'next/image';
import { lock } from '../../src/assets';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router'

const ForgetPass = () => {
    const [email, setEmail] = useState('')
    const router = useRouter()

    const resetPassword = async () => {
        if (!email) {
            Swal.fire({
                text: "Email tidak boleh kosong!",
                icon: "warning"
            })
        } else {
            const data = {
                email: email
            }
            await axios.post(`http://localhost:8080/user/reset-password`, data).then(
                res => {
                    Swal.fire("Kami telah mengirimkan tautan ke emailmu")
                    setEmail("")
                    router.push("/login")
                }
            ).catch(err => {
                Swal.fire({
                    text: "Email belum terdaftar!",
                    icon: "error"
                })
            })
        }
    }

    return (
        <>
            <Navbar />
            <div className='background-forget'>
                <div className='box-mail'>
                    <center style={{ marginTop: 100 }}>
                        <Image
                            src={lock}
                            width={50}
                            height={50}
                            layout={"fixed"}
                        />
                        <h2 style={{ textAlign: "center" }}>Lupa Kata Sandi</h2>
                        <input className='form-control' type={"email"} placeholder="Masukkan email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button className='btn btn-primary w-100' style={{ marginTop: 20 }} onClick={resetPassword}>Kirim Tautan Masuk</button>
                    </center>
                </div>
            </div>
        </>
    );
}

export default ForgetPass;
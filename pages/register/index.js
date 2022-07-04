import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Navbar from '../../src/components/Navbar';
import { URL } from '../../src/config/url';

const Register = () => {
    const [payload, setPayload] = useState()
    const onSubmitted = async () => {
        if (payload?.password !== payload?.confirmpassword) alert("Password tidak cocok")
        const bodypayload = {
            ...payload
        }
        console.log(bodypayload);
        const result = await axios.post(`${URL.development}/`, bodypayload)
        console.log(result.data);
        if(result){
            Swal.fire({
                text:"Registrasi Berhasil",
                icon:"success"
            })
        }
    }

    const onChange = (e) => {
        setPayload({
            ...payload, [e.target.name]: e.target.value
        })
    }
    return (<>
        <div>
            <Navbar />
            <div className='form-register'>
                <div>
                    <input onChange={onChange} name='name' placeholder='Nama Lengkap' className='form-control' required />
                    <input onChange={onChange} name='email' style={{ marginTop: 10 }} placeholder='Email' className='form-control' required />
                    <input onChange={onChange} name='username' style={{ marginTop: 10 }} placeholder='Username' className='form-control' required />
                    <input onChange={onChange} name='password' type={"password"} style={{ marginTop: 10 }} placeholder='Password' required className='form-control' />
                    <input onChange={onChange} name='confirmpassword' type={"password"} style={{ marginTop: 10 }} placeholder='Konfirmasi Password' required className='form-control' />
                    <button style={{ marginTop: 10 }} className='btn btn-primary w-100' onClick={onSubmitted}>
                        Daftar
                    </button>
                </div>
            </div>
        </div>
    </>);
}

export default Register;
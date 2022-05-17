import React from 'react';
import Navbar from '../../src/components/Navbar';

const Login = (props) => {
    return (
        <>
            <Navbar/>
            <div className='box-login'>
                <center>
                    <h2>Masuk</h2>

                    <div style={{ paddingLeft:30, paddingRight:30 }}>
                        <input className='form-control' type={"text"} placeholder="Username" style={{ marginTop:20, marginBottom:10 }}  />
                        <input className='form-control' type={"password"} placeholder="Password"  />
                        <a href='/forget' style={{ float:"right", marginTop:5}}>Lupa Kata Sandi</a>
                        <button className='btn btn-primary w-100' style={{ marginTop:20 }}>Masuk</button>
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
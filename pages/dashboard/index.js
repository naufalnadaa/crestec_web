import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [username, setUsername] = useState('')
    const router = useRouter()

    const checkPage = async() => {
        const data = await localStorage.getItem('username')
        if(data == null){
            router.push("/login")
        }
    }

    const getData = () => {
        const username = localStorage.getItem("username")
        setUsername(username)
    }

    const removeData = () => {
        localStorage.removeItem("username")
        router.push('/login')
    }

    useEffect(()=>{
        getData()
        checkPage()
    },[])
    return (
        <>
            <h2>Ini Dashboard, Usernameku : {username}</h2>
            <div>
                <button onClick={removeData} className='btn btn-danger'>Logout</button>
            </div>
        </>
    );
}

export default Dashboard;
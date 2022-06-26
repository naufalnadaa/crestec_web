import { useRouter } from 'next/router';
import { NextResponse } from 'next/server';
import React from 'react';
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [username, setUsername] = useState('')
    const [loader, setLoader] = useState(false)
    const router = useRouter()

    const checkPage = async () => {
        const data = await localStorage.getItem('username')
        if (data == null) {
            router.push('/login')
        } else {
            setLoader(true)
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

    useEffect(() => {
        getData()
        checkPage()
    }, [])

    if (!loader) {
        return (
            <div className="spinner-border centering" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
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
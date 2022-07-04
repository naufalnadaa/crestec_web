import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { logo } from '../assets';

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <Image
                            src={logo}
                            height={40}
                            width={150} //ini widthnya
                            layout={"fixed"}
                        />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link href={'/'}>
                                    <a class="nav-link active" aria-current="page">Home</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Help</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            {/* <FontAwesomeIcon icon={faUser} style={{ width:30, height:30 }} /> */}
                            <Link href={"/login"}>
                                <button style={{ marginRight: 20 }} class="btn btn-outline-primary" type="submit"><i className="bi bi-box-arrow-in-right"></i>Login</button>
                            </Link>
                            <Link href={"/register"}>
                                <button class="btn btn-outline-success" type="submit">Register</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
import axios from "axios"

const Login = (data) => {
    axios.post(`http://localhost:8080/user/login`, data)
}

export default Login;
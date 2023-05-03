import styled from "styled-components";
import {useState} from "react";


function LoginForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const results = await fetch("http://localhost:8080/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: inputs.username,
                password: inputs.password,
            })
        });
        console.log(results);
        // const results = await fetch("http://localhost:8080/signin", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         username: inputs.username,
        //         password: inputs.password,
        //     })
        // });
        // if(results.ok) {
        //     console.log("Ok response! trying to get token");
        //     const tokenResults = await fetch("http://localhost:8080/token", {
        //         method: 'POST',
        //     });
        //     console.log(tokenResults);
        // } else {
        //     console.log("Bad response!");
        // }

    };

    return(
        <LoginFormWrapper onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input
                type={"text"}
                name={"username"}
                placeholder={"Username"}
                value={inputs.username || ""}
                onChange={handleChange}
            />
            <input
                type={"password"}
                name={"password"}
                placeholder={"Password"}
                value={inputs.password || ""}
                onChange={handleChange}
            />
            <button type={"submit"}>Submit</button>
        </LoginFormWrapper>
    );
}

export default LoginForm;

const LoginFormWrapper = styled.form`
  
`;
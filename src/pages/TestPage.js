import {useSelector} from "react-redux";


function TestPage() {
    const {jwtToken} = useSelector(state => state.keys);

    const handleUserTestClick = async () => {
        let options;
        if(jwtToken) {
            options = {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${jwtToken}`,
                }
            }
        } else {
            options = {
                method: "GET",
            }
        }
        const results = await fetch("http://localhost:8080/test/get-user", options);
        const data = await results.text();
        console.log(data);
    };

    const handleAccessTokenClick = async () => {
        let options;
        if(jwtToken) {
            options = {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${jwtToken}`,
                }
            }
        } else {
            options = {
                method: "GET",
            }
        }
        const results = await fetch("http://localhost:8080/test/has-access-token", options);
        const data = await results.json();
        console.log(data);
    }

    return(
        <div>
            <h1>Test Page</h1>
            <br />
            <button onClick={handleUserTestClick}>Test User Exists</button>
            <button onClick={handleAccessTokenClick}>Test Access Button Exists</button>
        </div>
    );
}

export default TestPage;
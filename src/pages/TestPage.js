import {useSelector} from "react-redux";


function TestPage() {
    const {jwtToken} = useSelector(state => state.keys);
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

    const handleUserTestClick = async () => {
        const results = await fetch("http://localhost:8080/test/get-user", options);
        const data = await results.text();
        console.log(data);
    };

    const handleAccessTokenClick = async () => {
        const results = await fetch("http://localhost:8080/user/status", options);
        const data = await results.json();
        console.log(data);
    };

    const handleTestBalanceGetClick = async () => {
        const results = await fetch("http://localhost:8080/api/balance", options);
        const data = await results.json();
        console.log(data);
    };

    const handleTestGetBucketsByGroupIdClick = async () => {
        const results = await fetch("http://localhost:8080/api/buckets/3", options);
        const data = await results.json();
        console.log(data);
    }

    const handleTestGetBucketByIdClick = async () => {
        const results = await fetch("http://localhost:8080/api/bucket/2", options);
        const data = await results.json();
        console.log(data);
    }

    return(
        <div>
            <h1>Test Page</h1>
            <br />
            <button onClick={handleUserTestClick}>Test User Exists</button>
            <button onClick={handleAccessTokenClick}>Test Access Button Exists</button>
            <button onClick={handleTestBalanceGetClick}>Test Get Balance</button>
            <button onClick={handleTestGetBucketsByGroupIdClick}>Test Get Buckets By Group Id 3</button>
            <button onClick={handleTestGetBucketByIdClick}>Test Get Buckets By Id 2</button>
        </div>
    );
}

export default TestPage;
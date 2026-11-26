import React, { useState, useEffect } from "react";

function User() {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => console.log(data));

    }, []);

    return (
        <>
            <h2>Display User</h2>
        </>
    );
}

export default User;
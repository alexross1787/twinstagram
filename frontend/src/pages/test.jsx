import { useState, useEffect } from "react";

function test() {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const respsonse = await fetch('http://127.0.0.1:5000/login')
        const data = await Response.json()
        console.log(data.users)
    }
}
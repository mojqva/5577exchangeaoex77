import { useEffect, useContext, useState } from 'react' 
import { AuthContext } from "../context/AuthContext"
const axios = require('axios')


const AccountPage = () => {
    const auth = useContext(AuthContext)
    const [user, setUser] = useState({})
    console.log('User', user)


    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get(`/api/auth/${auth.userId}`)
                setUser(res.data[0])
            } catch (error) {
                console.error(error)
            }
        }
        getUsers()
    }, [])
    
    return (
        <div>
            AccountPage by {user.username}
        </div>
    );
};

export default AccountPage;
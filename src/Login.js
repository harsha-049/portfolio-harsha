import { useNavigate } from 'react-router-dom'


export default function Login(){
    const nav=useNavigate()

    return (
        <>
        <h1>Login page</h1>
        <button onClick={()=>nav('/dashboard')}>Go to DashBoard</button>
        </>
    )
}
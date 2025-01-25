import { useParams } from 'react-router-dom';

export default function Contact(){
    const{num}=useParams()
    return(
        <>
        <h1>Contact Page</h1>
        <h1> Num : {num}</h1>
        </>
    )
}
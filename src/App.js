import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import Home from './home'
import About from './about'
import Contact from './contact'
import Newbook from "./newbook";
import Oldbook from "./oldbook";
import Login from "./Login";
import Dashboard from "./Dashboard";
import StudentForm from "./StudentForm";
import User from "./User";
import Fruit from "./fruit";
import FruitUser from "./fruitUser";
import ArrUser from "./ArrUser";

export default function App(){
    return(
        <>
        <h1>Welcome to page</h1>
        <BrowserRouter>
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/aboutus">ABOUT</Link></li>
            <li><Link to="/contactus/954628">CONTACT</Link></li>
            <li><Link to="/book/newbook">New Book</Link> </li>
            <li><Link to="/book/oldbook">Old Book</Link> </li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/fruit">fruit</Link></li>
            <li><Link to="/fruituser">fruitUser</Link></li>
            <li><Link to="/ArrUser">ArrUser</Link></li>
        </ul>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/aboutus' element={<About />}></Route>
            <Route path='/contactus/:num' element={<Contact />}></Route>
            <Route path='/book'>
            <Route path='newbook' element={<Newbook/>}></Route>
            <Route path='oldbook' element={<Oldbook/>}></Route>
            </Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/signup' element={<StudentForm/>}></Route>
            <Route path='/user' element={<User/>}></Route>
            <Route path='/fruit' element={<Fruit/>}></Route>
            <Route path='/fruituser' element={<FruitUser/>}></Route>
            <Route path='/ArrUser' element={<ArrUser/>}></Route>
        </Routes>
        
        </BrowserRouter>

        </>
    )
}
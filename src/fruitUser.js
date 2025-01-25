import { useSelector } from "react-redux";

export default function FruitUser(){
    const user=useSelector((state)=>state.fruit.fuser)
    console.log("the fruits: ",user)
}

                                                                                                                                                                                                                               
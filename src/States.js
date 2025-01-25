export default function States(){
    var clr='blue'
    console.log("b4  : ",clr)
     function change()
     {
        clr='red'

        console.log('after.......',clr)
        
     }
    return(
        <>
        <h1>i love {clr} color</h1>
        <button onClick={change}>click here!! </button>
        </>
    )
}
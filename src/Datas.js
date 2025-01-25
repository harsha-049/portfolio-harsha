import Display from './Display'

function Datas()
{
    let name='harsha'
    const ans=`my name is ${name}`
    return(
    <>
    <h2>my name is {name}</h2>
    <h2>{ans}</h2>
    <Display n={name}/>
    </>
    )

}
export default Datas
import Todo from './Todo';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
           {/* <Blog></Blog>
           <Blog></Blog>
           <Blog></Blog>
           <div className= 'bdr BG-COLOR'>
             <User name  = "Abid"  city = "Khulna"></User>
            <br />
           <User name = "Iffat"  city = "Jashore "></User>
           </div>
            */}

            <Todo></Todo>
           
    </>
  )
}

//jsx component 
// function Person ()
// {
//   return (
//     <p>I am Abid</p>
//   )
// }



// if more return the use <> and </> return r vatore 
function Blog ()
{
  return (
    <>
    <div className = 'bdr'>
    <p>Hello Guys</p>
    <p>This is our New classRooam</p>
    <br />
    </div>
  
    </>
  )
}

//props
function User(props)
{
  return (
    <>
    <p>The user is : {props.name}</p>
    <p>The City is : {props.city}</p>
    </>
  )
}

export default App

import logo from './logo.svg';
import {useState} from "react";
import './App.css';

function App() {
  return (
    <div className="App">
     <Counter/>
     <AddColor/>
    </div>
  );
}

export default App;
//hook-react wont listen everything untill it is asked to listen,hook function is used to make react listen  to change
//hook starts with use
//const [state,setState]=useState(initialValue);
//state- current value(here 'like' in our example) or better say its an variable holding the value (initialValue)
//setState-is a function use to update the state-informing react that state is changed
//JUNE 2 STARTS
function Counter(){
    //JUNE 2 STARTS
// let like=10;
const [like,setLike]=useState(0)
const [disLike,setDisLike]=useState(0)
//Task-build dislike button- dislike should increase
//JUNE 2 ENDS
    return(
        //JUNE 2 STARTS
        <div className='counter-container'>
            
            <button className='like-button' onClick={()=> 
            // {
            //     like++;
            //     console.log(like)-- this is done in js

            // }
            setLike(like+1)
//calling setLike function
            }>like 👍 {like}</button>
            {/* <p>{like}</p> */}
            {/* when button is clicked onclick function get trigger that trigger the setState function,and the setState function inform the react that change is happened and than react is responsible to change or update the value where state(like) in temlate syntax is written */}

<button className='dislike-button' onClick={()=>setDisLike(disLike+1)}>Dislike 👎 {disLike}</button>

        </div>
        //JUNE 2 ENDS
    )
}
//JUNE 2 STARTS
// onClick and All eventlistner should be in camel case
//win + . ->emoji
// 👍👎
//JUNE 2 ENDS

function AddColor(){
    const[color,setColor]=useState("green")
    const styles={
        backgroundColor:color
    }
    const Initial_clor_list=["deepskyblue","orange","crimson"]
    // const[]
    return(
        <div>
            <input 
            value={color} onChange={(event)=>setColor(event.target.value)} style={styles} placeholder="Enter the color"/>
            {/* <ColorBox/> */}
            {Initial_clor_list.map((clr,index)=>(
                <ColorBox key={index} color={clr}/>
            ))}
        </div>
    )
};


function ColorBox({color}){
    const styles={
        backgroundColor:color,
        height:"25px",
        width:"250px",
        marginTop:"10px"
    };
    return <div style={styles}></div>
}
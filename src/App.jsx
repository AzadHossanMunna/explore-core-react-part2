
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Users from './Users'

function App() {
  //first way
  function handleClick(){
    alert('button click')
  }
  //second way
  const handleClick2 = ()=>{
    alert('button clicked')
  }
  //third way vejal party when we put any value in parameter
  const handleClick3=(num)=>{
    alert(num+5)
  }
  
  return (
    <>
      
      <h1> React core explore part 2</h1>
      <Counter></Counter>
      <Users></Users>
      <Friends></Friends>
      {/* first way click */}
      <button onClick={handleClick}>click me</button>
      {/* second way click */}
      <button onClick={handleClick2}>click me 2</button>
      {/* third way click more vejal */}
      <button onClick={()=>handleClick3(4)}>click me 3</button>
      
    </>
  )
}

export default App

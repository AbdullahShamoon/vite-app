# React  <b>useRef </b>

<ol>
    <li><b>useRef</b> keeps the value stored between renders. <br>
        In this, value changed doesn't cause a re-render. <br><br>
    <li>It can also be used to access a DOM element directly. 
</ol>

## Example : 1

```
 function App() {
  
  const a = useRef(0)

  useEffect(() => {
    a.current= a.current + 1
    console.log(a.current)
  },)

  return (
...
 ```

## Example : 2

```
function App() {
  const [count, setCount] = useState(0)
  const refBtn = useRef()

  useEffect(() => {
    console.log("First Render...")
    refBtn.current.style.backgroundColor = "red"
  },[])
  
 return (
    <>
      <div>
        <button ref={refBtn} onClick={() => setCount((count) => count + 1)}>
              count is {count}
        </button>
        <button onClick={() => refBtn.current.style.display = "none"}> Click Me to Hide </button>

```
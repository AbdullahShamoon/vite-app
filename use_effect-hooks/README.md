### React + Vite

# useEffect Hook

<li>The useEffect in ReactJS is used to handle the side effects such as fetching data and updating DOM. <br>
<li>This hook runs on every render but there is also a way of using a dependency array using which we can control the effect of rendering.

### Example
```
function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    alert('i will be executed on every render')
  })

  useEffect(() => {
    alert('i will be executed only on first render')
  }, [])

  useEffect(() => {
    alert('i will be executed only when count changes')
  }, [count])

  return ( ...
  ...
  ..
```
# React useMemo
React useMemo Hook returns a memoized value. 


The **useMemo** Hook only runs when any of its dependencies update. 
**useMemo** can improve performance big time. 

<i>It is similar to useCallback Hook. The main difference is useMemo returns a memoized value and useCallback returns a memoized function. </i>


## Example

```

const num = new Array(50_00_000).fill(0).map((_, ind) => {
  return {
    index: ind,
    idMagical: ind === 49_99_999
  }
})

function App(){
    ...
    ..
    const magical = num.find(item => item.idMagical)    // Expensive Cumputation
}
```
The above code will slow down the website , As the expensive computation will render and recalculated on every render 
So to copeup with this problem we will use useMemo


```
function App(){
const [number, setNumber] = useState(num)

const magical = useMemo(() => number.find(item => item.idMagical) , [number])
}
```
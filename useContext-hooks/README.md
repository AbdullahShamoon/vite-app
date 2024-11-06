# React useContext
useContext helps to manage states globally, i.e. between components. 

## Create Context
To create context, you must Import createContext and initialize it:

```
import { createContext } from "react";

const counterContext = createContext()

export default counterContext
```

## Context Provider
Now we need to wrap the component tree that need the state Context in a Provider. It's like the Provider will provide the state to every component in that tree which is wrapped in Provider. 

```
<counterContext.Provider value={count}>
 .....
 ....
</counterContext.Provider>
```
here, the value of *"count"* is passed to all the components and to their sub-contents those are inside the Provider.

## useContext hook
First we need to import it:

```
import { useContext } from 'react'
```

Also import the  counterContext.js file (If created seperately)

```
import counterContext from '../context/context'
```

To access useContext, you can do something like this:

```
const Component3 = () => {
    const count = useContext(counterContext)
    return (
        <div>
            {count}
        </div>
    )
}
```

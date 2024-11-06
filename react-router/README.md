# React Router
#### 👉️ Open up your terminal and bootstrap React Router 
```
npm install react-router-dom
```

## Adding a Router

First thing to do is create a Browser Router and configure our first route. This will enable client side routing for our web app.

The main.jsx file is the entry point. Open it up and we'll put React Router on the page.

👉 Create and render a browser router in main.jsx

```
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
```

```
import * as ReactDOM from "react-dom/client";
```

## useParams

The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <**Route path**>. Child routes inherit all params from their parent routes.
```
import { useParams } from 'react-router-dom'
```
Example
```
const User = () => {
    const params = useParams()
  return (
    <div>i am User {params.username} </div>
  )
}
```

```
const router = createBrowserRouter([
    {
      path: "/home",
      element: <><Navbar /><Home/></>
    },
    {
      path: "/user/:username",
      element: <><Navbar /><User/></>
    }

  ])
  ```


## NavLink

A <**NavLink**> is a special kind of <**Link**> that knows whether or not it is "active", "pending", or "transitioning". 

```
import { NavLink } from "react-router-dom";
```

.jsx

```
 <NavLink to='/Home' className={(active) => active.isActive ? 'active' : ''}><li>Home</li></NavLink>
 ```

 .css

 ```
 .active{
    background-color: goldenrod;
    color: white;
}
```

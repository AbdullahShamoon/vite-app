<b><u>Hooks</u></b> and <b><u>State</u></b> in React

<li>Made a counter app using above React functions<br><br>

# useState

The React useState Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an application.

## Import useState
To use the useState Hook, we first need to import it into our component.

At the top of your component, import the useState Hook.

` import { useState } from "react"; `

## Initialize useState
We initialize our state by calling <b>useState</b> in our function component.

<b>useState</b> accepts an initial state and returns two values:
<li>The current state.
<li>A function that updates the state.

### Example:
Initialize state at the top of the function component.
```
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
}
```

## Read State
We can now include our state anywhere in our component.

### Example:
Use the state variable in the rendered component.
```
import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return <h1>My favorite color is {color}!</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
```

## Update State
To update our state, we use our state updater function.

`We should never directly update state. Ex: color = "red" is not allowed.`

### Example:
Use a button to update the state:
```
import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
```
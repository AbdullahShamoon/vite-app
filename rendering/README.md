# Conditional Rendering AND Rendering List

## Conditional Rendering
In React, you can conditionally render components.

There are several ways to do this.

### Ternary Operator
A way to conditionally render elements is by using a ternary operator.
#### Example
```
{showbtn ? <button>showbtn is true</button>: <button>showbtn is false</button>}
```
the above code is used in App.jsx 

### Logical && Operator
Another way to conditionally render a React component is by using the && operator.
#### Example
```
{showbtn && <button>showbtn is true</button>}
```
we use && operator when we have to use only 'if'
    
## Rendering List in React
To render a list in react, we will use the JavaScript array map function. We will iterate the array using map and return the required element in the form of jsx to render the repetitive elements.
#### Example
```
import React from 'react';
import ReactDOM from 'react-dom';

const numbers = [1,2,3,4,5];

const updatedNums = numbers.map((number)=>{
    return <li>{number}</li>;
});

ReactDOM.render(
    <ul>
        {updatedNums}
    </ul>, 
    document.getElementById('root')
);
```
#### Output
<li>1
<li>2
<li>3
<li>4
<li>5

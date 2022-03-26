import React from 'react';
import './QnA.css'

const QnA = () => {
    return (
        <div className='qna-part'>
            <h4>How react works?</h4>
            <p><strong>Answer: </strong>React is a JavaScript library for creating user interfaces that is declarative, fast, and customizable. ReactJS is an open-source, component-based front end library that is exclusively responsible for the application's display layer. React is a declarative paradigm that facilitates reasoning about application and strives to be both efficient and versatile. A React application is made up of several components, each of which is in charge of producing a tiny, reusable piece of HTML. Components can be layered within other components to create sophisticated applications from simple building pieces.</p>
            <h4>How useState works?</h4>
            <p><strong>Answer: </strong>useState is a Hook that allows state variables to be used in functional components. We send the initial state to this method, and it returns a variable containing the current state value and another function to update it. The useState method allows us to add state to function components. When we use React useState within a function component, it creates a single piece of state that is connected with that component. Whereas the state in a class is always an object, the state in Hooks can be of any kind. Each state has a single value, which can be an object, an array, a boolean, or any other type we can think of.</p>
        </div>
    );
};

export default QnA;
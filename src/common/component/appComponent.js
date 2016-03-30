/*
 Here we import react's package default module and assign it to a variable named React.
 Additionally we also import the Component module and assign it to a variable named Component.
*/
import React, {Component} from 'react';

/*
 Subclass React.Component and implement the render method. This method must return a single child element.
 A react component at minimum must implement the render method.
 Also set this class as the default export of this file so we can import it from other files.
*/
export default class App extends Component {
    render() {
        return (
            // Nooo this looks like inline html! Are we back in the land of classic asp and php? Short answer is no we are not.
            // These might look like plain html, but under the bonnet they are shorthand syntax to generate ReactElements.
            // A ReactElement is the primary basic type in React which constitutes the virtual DOM. In essence, you are
            // writing virtual DOM. It's called virtual because it's not the real DOM. React keeps an in-memory copy
            // of this DOM subtree and only flush changes to the real DOM in the browser if there is a props or state
            // change. We'll talk about props and state more in later posts. For now, just understand that you are writing
            // a html-like syntax called jsx which becomes part of the virtual dom.
            <div>
                <h1>Hello world in React!</h1>
                <p>
                    The time now is { (new Date()).toLocaleString() }
                </p>
            </div>
        );
    }
}
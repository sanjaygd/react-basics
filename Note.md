# setState
- In order to modify state inside component, use setSate then only react change the state and renders the changes.
- setState is asynchronous. In order to run anything after changing the state, we need to pass two args one as an object and second as a callbackfunction.

-In order to make changes on previous state we need pass function to setState which takes two parameter one is previousState and other is props both are object only.
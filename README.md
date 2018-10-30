This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## State & Events
### SWBAT
 - Learn about event handlers in React
 - Learn the difference between props and state, and why one would use one or the other
 - Instantiate state in and out of the constructor
 - Trigger re-renders by manipulating state
 - Manipulate the DOM by changing values in state
 - Get more familiarity with component hierarchy and the flow of information

### Props vs State

Learn by doing! Let's build something that needs state!

- [`state` is data that will change](https://facebook.github.io/react-native/docs/state.html).
- How do we define it?
  - `constructor` vs `state = {}`
- How do we change it?
  - **Never** mutate `state`!!!
  - Always **make copies** of `state`!!!
  - We change it with `setState`
- *Briefly* - Event Handlers
  - `onClick` to execute some action
- Debugging `state`:
  - `render` as a way to also test `setState`
- Binding functions to use `setState`; why?
- `props` go down, `state` goes up

### Flow of Information in React

> `props` go down, `state` goes up

What does this really mean?
- Picture

#Plan
- render dog picture to page in a component
- component changes dog through state updates
- refactor to have DogContainer render DogCard
- pass props to DogCard from DogContainer state
- trigger rerender in DogContainer by calling a function in DogCard

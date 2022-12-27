# Creating custom hooks in React

This PR shows you how to create own custom hooks it's easy

## What Are Custom Hooks?

**Custom Hooks** are functions. Usually, they start with the word “use”

Custom Hooks allow us to access the React ecosystem in terms of hooks, which means we have access to all the known hooks like `useState`, `useMemo`, `useEffect`, etc.

## Why Should You Use It?

*When we want to share logic between two JavaScript functions, we extract it to a third function. Both components and Hooks are functions, so this works for them too!*

Sometimes you need to use `useEffect` and `useState`

After a while, you realize that you need to use the same logic of useEffect and useState in another component as well.
You can duplicate code, but probably tell yourself that there must be a better way, So what will you do? Custom Hooks to the rescue 😎.

There are several advantages to using *Custom Hooks*:

**Reusability** — we can use the same hook again and again, without the need to write it twice.

**Clean Code** — extracting all the component logic into a hook will provide a cleaner codebase.

**Maintainability** — easier to maintain. if we need to change the logic of the hook, we only need to change it once.

**Great Community** — there is a good chance somebody already created the hook you're thinking of. The web is filled with a ton of Custom Hooks! you can find a hook for your need and use it as-is or even better — you can use it as a starting point and make it awesome!

## Let's create custom hook

I'll write on Typescript. With using TS we can show What our function will return. TS improves everything ^)

`useToggle` is really simple way to understand How to work custom hooks

### useToggle
```high-light
import { useCallback, useState } from "react";

const useToggle = (initialState: boolean = false): [boolean, () => void] => {
  const [toggle, setStateToggle] = useState<boolean>(initialState);

  const setToggle = useCallback((): void => {
    setStateToggle((prev: boolean) => !prev);
  }, []);

  return [toggle, setToggle];
};

export default useToggle;
```

*App component*

```high-light
function App() {
  const [toggle, setToggle] = useToggle(false);

  return (
    <div className="App">
      <header className="App-header">
        <button
          style={{ background: `${toggle ? "green" : "red"}` }}
          onClick={setToggle}
        >
          change color
        </button>
      </header>
    </div>
  );
}
```

I think you understand What this function does, but I saw how a lots beginners created repeatable code and It looked horrible. So this example shows us how we can use our hook. By the way now we don't need to create the same functional in each component, because we can use `useToggle` then Where we want.

**Our code has become more readable and understandable**


*In main branch I have the customHooks folder in src and there you can find other examples with creating custom-hooks*

# React JS detached node memory leak when using key and focus on contenteditable element (Proof of concept)

## Description

Just a small repository with proof of bug concept found in React JS.

## Reproducing a bug

Despite the long name of the topic, the bug is quite simple. Let's assume there is a component `App` with `page` state and whose childs have the component `Page` with `key(string)` prop and `page(string)` prop.

```jsx
function App() {
    const [page, _] = useState('page-1')

    return(
        <div className="App">
            <Page key={page} page={page}
        </div>
    )
}
```

Inside `Page` component there is `contenteditable` div with `$input` ref on it. Also there is a `useEffect` hook, that focuses div when component mounts.

```jsx
function Page({ page }) {
  const $input = useRef(null);

  useEffect(() => {
    $input.current.focus();
  }, []);

  return (
    <div className="Page">
      <div ref={$input} className="Page__input" contentEditable />
    </div>
  );
}
```

Using edge browser `Detached Elements` dev tool, if you change `App` component `page` state a few time and collect detached nodes in dev tools, where will be a lot of `Page` components. If you force collect garbage using devtools, there still will be one `Page` component(but it works from time to time).

\* For testing do `yarn build` and `yarn preview` to avoid react strict mode double rerender

# web603-class-w2d2

## Getting Started

### Step 1: Create `demo-app/`.
```bash
$ npx create-react-app demo-app
```

Then drop the two initial files `routerexample1.js` and `routerexample2.js` into `demo-app/src/`.

### Step 2: Install dependencies.
```bash
$ npm install react-router-dom
```

### Step 3: Complete the two demos.

After you complete each demo, go to `demo-app/src/index.js`.

Comment out the line
```js
import App from './App';
```
and for demo-1 replace it with
```js
import App from './routerexample1'
```
and for demo-2 replace it with
```js
import App from './routerexample2'
```

### Step 4: Check the result
Run
```bash
$ npm start
```
in the application-level directory, that is `demo-app/`.

## Side Notes

### 1. Use `Routes` instead of `Switch`
The version of `react-router-dom` you installed matters here. You can check the version in `package.json` and see if it is 5.x or 6.x. 

If it is 6.x, you should use `Routes` instead of `Switch` (which might be in the instruction) because `Switch` is deprecated in version 6 of `react-router-dom`.

### 2. The Trailing Slash Issue.
In `routerexample2.js`, as you will be adding descendants of the parent page `/topics`, for example, `/topics/cats` and `/topics/dogs`, you need to add the trailing slash for the route `/topics`, making it `/topics/`.

That means:

1. Link to `/topics/` instead of `/topics`.
```
...
    <Router>
      <div>
        <ul>
          ...
          <li>
            <Link to="/topics/">Topics</Link>
          </li>
...
```

2. Indicate the parent route to be `/topics/*` instead of `/topics`. This is important because using `/topics` may lead to `/topics/cats` not rendering anything as you click the topic "Cats" (same for "Dogs").
```
...
        <Routes>
          ...
          <Route path="/topics/*" element={<Topics />} />
        </Routes>
```

Adding the trailing slash for `/topics` actually makes sense because it should be treated as a resource, as you plan to add descendants. So, `/topics/` implies the resource (like a directory) for all the topic**s** (topic "cats" and topic "dogs"), and `/topics/cats` implies specific part of the resource being accessed (like a file).

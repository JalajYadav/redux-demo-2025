## ⚛️ Redux

**Redux** is the **core state management library**.

* **What it is:** A predictable state container for JavaScript applications. It is **platform-agnostic** (it can be used with React, Angular, Vue, or vanilla JS).
* **Key Concept:** It enforces a **strict unidirectional data flow** using three main components:
    1.  **Store:** Holds the single source of truth (the application state).
    2.  **Actions:** Plain objects describing *what happened*.
    3.  **Reducers:** Pure functions that take the current state and an action, and return a *new* state.

---

## 🔗 React-Redux

**React-Redux** is the **official bridge** between Redux and React.

* **What it is:** A set of bindings that allow React components to **read state** from the Redux store and **dispatch actions** to the store.
* **Key Concept:** It manages performance optimization and prevents unnecessary re-renders. Its primary tools are:
    * The `<Provider>` component (wraps the root component).
    * The `useSelector()` hook (to read state).
    * The `useDispatch()` hook (to send actions).
* **Crux:** You cannot use Redux effectively in a React application without the performance and context management provided by React-Redux.

---

## 🛠️ Redux Toolkit (RTK)

**Redux Toolkit** is the **opinionated set of tools and best practices** designed to simplify Redux development.

* **What it is:** A package that wraps the core Redux library, providing utility functions to solve common Redux problems (like boilerplate, complex configuration, and mutability issues).
* **Key Features:** It includes functions that are now considered the standard way to write Redux logic:
    * `configureStore`: Simplifies store setup and includes developer tools.
    * `createSlice`: Automates the creation of actions and reducers for a single feature, drastically reducing boilerplate.
    * `createAsyncThunk`: Standardizes handling asynchronous logic (like API calls).
* **Crux:** RTK is the **recommended way** to write Redux code today. It is not a replacement for Redux, but rather a layer that makes Redux much easier to use.

| Component | Role | Purpose |
| :--- | :--- | :--- |
| **Redux** | Core Library | Defines *how* state management works (The Rules). |
| **React-Redux** | Integration Layer | Defines *how* React talks to Redux (The Bridge). |
| **Redux Toolkit (RTK)** | Abstraction/Tools | Simplifies *how* you write Redux code (The Simplifier). |


## Questions
* Q.1 We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore. WHY ?? <br>
  Answer: https://redux.js.org/usage/configuring-your-store/#problems-with-this-approach <br>
  In Short: Previously adding middleWares required a lot of Templating Jargon... like composing middlewares, enhancers and all


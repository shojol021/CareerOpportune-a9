import React from 'react';

const Blogs = () => {
    return (
        <div className='m-9'>
            <h2 className='text-center font-bold text-3xl m-5'>Blogs</h2>
            <div className='m-3 border-solid border border-sky-300 hover:border-purple-400 rounded-lg bg-gradient-to-br from-sky-200  to-purple-200 p-3'>
                <h2 className='font-bold text-2xl'>When should you use Context API?</h2>
                <p>Context API in React is used when data needs to be shared between components without the need to pass props at every level of the component tree. It's useful for global state management. If you have data that needs to be accessed by multiple components at different levels of the component tree, Context API can be a good solution to avoid "prop drilling" and keep your code clean and maintainable.</p>
            </div>
            <div className='m-3 border-solid border border-sky-300 hover:border-purple-400 rounded-lg bg-gradient-to-br from-sky-200  to-purple-200 p-3'>
                <h2 className='font-bold text-2xl'>What is Custom Hook?</h2>
                <p>A custom Hook in React is a reusable function that allows developers to extract stateful logic from a component so that it can be shared and reused among multiple components. Custom Hooks start with the word "use" and are a powerful way to keep code DRY, reduce duplication, and make code more modular and easier to maintain. By isolating specific functionality, custom Hooks can simplify components, make code more reusable, and improve overall code organization.</p>
            </div>
            <div className='m-3 border-solid border border-sky-300 hover:border-purple-400 rounded-lg bg-gradient-to-br from-sky-200  to-purple-200 p-3'>
                <h2 className='font-bold text-2xl'>What is useRef and purpose of it?</h2>
                <p>useRef is a hook in React that allows you to create a reference to a mutable value or a DOM element that persists across renders. It's particularly useful when you need to access or modify an element directly, such as setting focus on an input or scrolling to a certain position on the page. Since useRef doesn't cause a re-render when the value changes, it's also useful for storing non-state data that doesn't need to trigger a UI update, such as a previous value or a flag to track whether a component has mounted.</p>
            </div>
            <div className='m-3 border-solid border border-sky-300 hover:border-purple-400 rounded-lg bg-gradient-to-br from-sky-200  to-purple-200 p-3'>
                <h2 className='font-bold text-2xl'>What is useMemo and purpose of it?</h2>
                <p>useMemo is a hook in React that helps you optimize performance by memoizing a computed value. It allows you to cache the result of a costly computation, so that if the inputs to that computation haven't changed, you can reuse the cached result instead of recomputing it. This can be particularly useful when you have expensive calculations or complex logic inside your component that may be repeated frequently. By using useMemo, you can ensure that your component only recomputes the value when it's needed, instead of wasting resources by computing it every time your component renders.</p>
            </div>
        </div>
    );
};

export default Blogs;
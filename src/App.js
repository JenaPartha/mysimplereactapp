// src/App.js
import React, { lazy, Suspense } from 'react';

const MyLazyComponent = lazy(() => import('./MyLazyComponent'));
const MyComponent = lazy(() => import('./MyComponent1'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
        <MyLazyComponent />
      </Suspense>
    </div>
  );
};

export default App;

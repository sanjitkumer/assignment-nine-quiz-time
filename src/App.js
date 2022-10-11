import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Component/Main/Main';
import Home from './Component/Home/Home';
import Topics from './Component/Topics/Topics';
import Statistics from './Component/Statistics/Statistics';
import Blog from './Component/Blog/Blog';

function App() {
  const router = createBrowserRouter([
      {
        path:'/',
        element: <Main></Main>,
        children: [
          {
            path:'/',
            element: <Home></Home>
          },
          {
            path:'/topics',
            element: <Topics></Topics>
            loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          },
          {
            path:'/statistics',
            element: <Statistics></Statistics>
          },
          {
            path:'/blog',
            element: <Blog></Blog>
          }
        ]
      }
  ]) 
  return (
    <div className="App">
    <RouterProvider router ={router}></RouterProvider>
    </div>
  );
}

export default App;

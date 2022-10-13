import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Component/Main/Main';
import Topics from './Component/Topics/Topics';
import Statistics from './Component/Statistics/Statistics';
import Blog from './Component/Blog/Blog';
import Errorpage from './Component/Errorpage/Errorpage';
import Questions from './Component/Questions/Questions';

function App() {
  const router = createBrowserRouter([
      {
        path:'/',
        element: <Main></Main>,
        errorElement: <Errorpage/>,
        children: [
          {
            path:'/',
            loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
            element: <Topics></Topics>
          },
          {
            path:'/topics',
            loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
            element: <Topics></Topics>
           
          },
          {
            path:'/questions/:id',
            loader:async({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
            element:<Questions/>
          },
          {
            path:'/statistics',
            loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
            element:<Statistics/>
          },
          {
            path:'/blog',
            element:<Blog/>
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

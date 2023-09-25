import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import VirtualAssistants from '@src/virtualAssistants'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/virtual_assistant/:type",
    element: <VirtualAssistants />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  // </React.StrictMode>
);

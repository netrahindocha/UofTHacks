import Album from './Album';
import './App.css';
import Header from './Header';
import PhotoShop from './PhotoShop';
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <Header/>
        <PhotoShop/>
        </>
      )
    },
    {
      path: "album",
      element: (
        <>
        <Header/>
        <Album/>
        </>
      )
    }
  ]);

  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}

export default App;

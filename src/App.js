import { useState } from 'react';
import Album from './Album';
import './App.css';
import Header from './Header';
import PhotoShop from './PhotoShop';
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom";

function App() {

  const [imageURL, setImageURL] = useState("");


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <Header/>
        <PhotoShop setImageURL={setImageURL}/>
        </>
      )
    },
    {
      path: "album",
      element: (
        <>
        <Header/>
        <Album imageURL={imageURL}/>
        </>
      )
    }
  ]);

  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}

export default App;

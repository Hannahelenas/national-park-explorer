import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import Parks from "./pages/Parks";
import { NewsProvider } from "./contexts/NewsProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "parks", element: <Parks /> },
    ],
  },
]);

function App() {
  return (
    <>
      <NewsProvider>
        <RouterProvider router={router} />
      </NewsProvider>
    </>
  );
}

export default App;

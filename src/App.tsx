import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import Parks from "./pages/Parks";
import { NewsProvider } from "./contexts/NewsProvider";
import { ParkProvider } from "./contexts/ParkProvider";

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
      <ParkProvider>
        <NewsProvider>
          <RouterProvider router={router} />
        </NewsProvider>
      </ParkProvider>
    </>
  );
}

export default App;

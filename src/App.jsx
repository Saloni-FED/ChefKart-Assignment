import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailPage from "./components/Detail/DetailPage";
function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/detail",
    element:<DetailPage/>
  }
]);

export default router;

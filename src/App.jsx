import Header from "./components/Header";
import { createBrowserRouter } from "react-router-dom";
import DetailPage from "./components/Detail/DetailPage";
import { getInfo } from "./components/Body";
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
    loader : getInfo
  },
  {
    path:"/detail",
    element:<DetailPage/>
  }
]);

export default router;

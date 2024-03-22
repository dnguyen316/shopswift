import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
    </>
  );
}

export default App;

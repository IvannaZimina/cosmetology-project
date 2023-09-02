import { FC } from "react";
import { RouterProvider } from "react-router-dom"
import { routing } from "./routing"

const App: FC = () => <RouterProvider router={routing} fallbackElement={<>LOADING</>}/>;

export default App;

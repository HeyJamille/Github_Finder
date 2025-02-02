import { Outlet } from "react-router-dom"

// CSS
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <h1>GitHub Finder</h1>
      <Outlet />
    </div>
  )
}

export default App

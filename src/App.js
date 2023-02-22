
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const Router = createBrowserRouter(
  createRoutesFromElements(
   
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="/aboutus" element={<About />} />
    </Route>

  )
);
function App() {
  return (
   <>
    <NoteState>
<RouterProvider router={Router}/>
</NoteState>
   </>
  );
}

export default App;

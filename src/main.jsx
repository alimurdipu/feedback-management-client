import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  BrowserRouter,
  Route,
  RouterProvider, Routes,
} from "react-router-dom";
// import { router } from './Routes/Routes';
import Main from './Layout/Main';
import Dashboard from './Pages/Dashboard/Dashboard';
import Environment from './Pages/Environment/Environment';
import Team from './Pages/Team/Team';
import Task from './Pages/Task/Task';
import Login from './Pages/Login/Login';
import FirstPage from './Pages/FirstPage/FirstPage';

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="environment" element={<Environment />} />
          <Route path="team" element={<Team />} />
          <Route path="task" element={<Task />} />
          <Route path="admin" element={<FirstPage />} />
        </Route>
          <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
)

import { useState } from "react";

import "./App.css";
import LoginForm from "./services/authentications/components/Login";
import { Route, Routes } from "react-router-dom";
import Layout from "./services/components/layout";
import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
import EmployeeForm from "./services/employees/componenets/employeeform";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route>
        <Route path="home" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="employee" element={<Employee />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkauth from "./compontents/check-auth.jsx";
import Tickets from "./pages/tickets.jsx";
import TicketDetailsPage from "./pages/ticket.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Checkauth protected={true}>
              <Tickets />
            </Checkauth>
          }
        />
         <Route
          path="/tickets/:id"
          element={
            <Checkauth protected={true}>
              <TicketDetailsPage/>
            </Checkauth>
          }
        />
        <Route
          path="/login"
          element={
            <Checkauth protected={false}>
              <Login/>
            </Checkauth>
          }
        />
        <Route
          path="/signup"
          element={
            <Checkauth protected={false}>
              <Signup/>
            </Checkauth>
          }
        />
        <Route
          path="/admin"
          element={
            <Checkauth protected={true}>
              <Admin/>
            </Checkauth>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

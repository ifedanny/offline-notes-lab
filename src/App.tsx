//src/pagejs


import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import "./index.css";
export default function App() {
  return (
    <>
      <Home />
      <Analytics />
    </>
  );
}
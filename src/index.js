import React from "react"
import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client';
import PrimerApp from "./PrimeraApp";
import "./index.css"
import { CounterApp } from "./CounterApp";


//  const divRoot = document.querySelector("#root");
// ReactDOM.render(<PrimerApp />, divRoot);

const divRoot = document.getElementById('root');
const root = createRoot(divRoot); // createRoot(container!) if you use TypeScript
// root.render(<PrimerApp saludo="hola señor sergio" />);
root.render(<CounterApp value={0} />);

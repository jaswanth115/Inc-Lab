import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Link, Routes} 
from "react-router-dom";

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Navbar/>}/>
		</Routes>
	</BrowserRouter>
);

export default App;

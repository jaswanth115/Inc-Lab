import React from "react";
import SkillReviewPage from "./pages/SkillReview";
import { BrowserRouter, Route, Link, Routes} 
from "react-router-dom";
import SkillPage from "./pages/SkillPage";

const App = () => (
	<BrowserRouter>
    	<Routes>
      		<Route path="/" element={ <SkillReviewPage/>} />
      		<Route path="/skill/:technology/:id" element={<SkillPage />} />
    	</Routes>
	</BrowserRouter>
);

export default App;

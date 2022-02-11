import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/snacks" element={<Index />}/>
        <Route path="/snacks/new" element={<New />}/>
        <Route path="/snacks/:id" element={<Show />}/>
        <Route path="/snacks/:id/edit" element={<Edit />}/>
      </Routes>
    </Router>
  );
}

export default App;

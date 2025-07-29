import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
function App() {
  return(
      <Router>
      <Routes>
        {/* الصفحة الرئيسية هي Page1 */}
        <Route path="/" element={<Page1 />} />

        {/* صفحة 2 */}
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;
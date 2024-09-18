import { BrowserRouter as Router } from 'react-router-dom';
import {Page} from "./components/app-page";
// Pages

const App = () => {
  return (
    <Router>
      <Page/>
    </Router>
  );
};

export default App;

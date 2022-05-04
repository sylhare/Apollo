import './styles.css';
import { BrowserRouter } from "react-router-dom";
import App from '../Nav';

export default function Root() {
  return (<BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

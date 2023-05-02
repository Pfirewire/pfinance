import {createRoot} from "react-dom/client";
import App from "./App";
import {NavigationProvider} from "./context/navigation";
import "./index.css";


const el = document.getElementById('root');
const root = createRoot(el);

root.render(
    <NavigationProvider>
        <App />
    </NavigationProvider>
);
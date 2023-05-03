import {createRoot} from "react-dom/client";
import App from "./App";
import {NavigationProvider} from "./context/navigation";
import "./index.css";
import {Provider} from "react-redux";
import {store} from "./store";


const el = document.getElementById('root');
const root = createRoot(el);

root.render(
    <Provider store={store}>
        <NavigationProvider>
            <App />
        </NavigationProvider>
    </Provider>
);
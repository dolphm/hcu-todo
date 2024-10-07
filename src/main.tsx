import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./app.tsx";
import "./index.css";
import "./mock/task.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);

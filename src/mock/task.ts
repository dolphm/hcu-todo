import {createServer} from "miragejs";
import {defaultTask} from "./data";

createServer({
	routes() {
		this.namespace = "api";

		this.get("/tasks", () => {
			return defaultTask;
		});

		this.post("/tasks", (_, request) => {
			const attrs = JSON.parse(request.requestBody);
			attrs.id = Math.floor(Math.random() * 1000);
			return attrs;
		});
	},
});

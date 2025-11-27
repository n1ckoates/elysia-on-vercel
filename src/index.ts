import { Elysia } from "elysia";

export default new Elysia().get("/", ({ cookie, redirect }) => {
	cookie.testCookie.value = "cookie value";
	return redirect("https://example.com");
});

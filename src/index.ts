import { Elysia } from "elysia";

export default new Elysia()
	.get("/", () => "Hello Vercel Function")
	.get("/test", ({ cookie }) => {
		cookie.testCookie.set({
			value: "Vercel",
		});

		cookie.secondCookie.set({
			value: "Vercel",
		});

		return "Cookie set";
	});

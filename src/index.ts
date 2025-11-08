import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Vercel, from Elysia!");

export default app;

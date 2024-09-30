import { Hono, Next } from "hono";
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { env } from "hono/adapter";

const app = new Hono();

app.post("/", async (c) => {
	// Todo add zod validation here
	const body: {
		name: string;
		department: string;
		salary: number;
	} = await c.req.json();
	const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c);

	const prisma = new PrismaClient({
		datasourceUrl: DATABASE_URL,
	}).$extends(withAccelerate());

	console.log(body);

	await prisma.employee.create({
		data: {
			name: body.name,
			department: body.department,
			salary: body.salary,
		},
	});

	return c.json({ msg: "as" });
});

export default app;

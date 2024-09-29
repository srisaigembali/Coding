import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function insertUser(
// 	username: string,
// 	password: string,
// 	firstName: string,
// 	lastName: string
// ) {
// 	const res = await prisma.user.create({
// 		data: {
// 			email: username,
// 			firstName,
// 			lastName,
// 			password,
// 		},
// 		select: {
// 			id: true,
// 		},
// 	});

// 	console.log(res);
// }
// insertUser("hs@gmail.com", "hs123456", "harkirat", "singh");

interface updateparams {
	firstName: string;
	lastName: string;
}

async function updateUser(
	username: string,
	{ firstName, lastName }: updateparams
) {
	const res = await prisma.user.update({
		where: { email: username },
		data: {
			firstName,
			lastName,
		},
	});
	console.log(res);
}
updateUser("jd@gmail.com", {
	firstName: "John",
	lastName: "Doe",
});

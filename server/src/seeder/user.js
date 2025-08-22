import { User } from "../model/user.Model.js";

export const seedUsers = async () => {
    try {
        const users = await User.insertMany([
            {
                Fullname: "John Doe",
                email: "john@example.com",
                password: "password",
                role: "user"
            },
            {
                Fullname: "Jane Smith",
                email: "jane@example.com",
                password: "password",
                role: "user"
            }
        ]);
        console.log("Users seeded successfully:", users);
    } catch (error) {
        console.error("Error seeding users:", error);
    }
};

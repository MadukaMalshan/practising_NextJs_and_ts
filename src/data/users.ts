
export type User = {
    id: string;
    name: string;
    role: string;
    age: number;
    isActive: boolean;
    bio: string;
    email: string; // Adding email as it's common
};

export const users: User[] = [
    {
        id: "1",
        name: "John Doe",
        role: "Software Engineer",
        age: 28,
        isActive: true,
        bio: "Passionate full-stack developer with 5 years of experience.",
        email: "john@example.com",
    },
    {
        id: "2",
        name: "Jane Smith",
        role: "Product Manager",
        age: 34,
        isActive: true,
        bio: "Product visionary leading cross-functional teams to success.",
        email: "jane@example.com",
    },
    {
        id: "3",
        name: "Mike Johnson",
        role: "UI/UX Designer",
        age: 25,
        isActive: false,
        bio: "Creative designer focused on intuitive user experiences.",
        email: "mike@example.com",
    },
];

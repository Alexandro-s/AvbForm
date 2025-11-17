import bcrypt from "bcrypt";



type User = {
    id: number;
    name: string;
    email: string;
    password: string;
}

const users: User[] = [];

export const findByEmail = (email: string) => {
    return users.find( u => u.email === email.toLowerCase().trim());
};

export const create = async ({ name, email, password }: {name: string, email: string, password: string}) => {
    const hashed = await bcrypt.hash(password, 10);
    const newUser : User = {
        id: users.length + 1,
        name: name.trim(),
        email: email.toLowerCase().trim(),
        password: hashed
    };

    users.push(newUser);
    return newUser;
};

export const comparaPassword = (plain:string, hashed: string) => {
    return bcrypt.compare(plain, hashed);
}
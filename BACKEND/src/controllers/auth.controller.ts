import {Request, Response } from "express";
import * as UserService from "../services/user.service"
import { signToken } from "../utils/jwt.util";
import bcrypt from "bcrypt";





export const cadastro = async (req : Request, res:Response) => {
    try {
        const { name, email, password } = req.body;

        if (!name?.trim() || !email?.trim() || !password?.trim()) {
            return res.status(400).json({error: "Preencha todos os campos"});
        }
        if (!email.includes("@")) {
            return res.status(400).json({error: "Email formato Invalido" });
        }
    if (password.length < 6) {
    return res.status(400).json({ error: "Senha deve ter pelo menos 6 caracteres" });
}


    const jaTemUser = await UserService.findByEmail(email);


        if(jaTemUser) return res.status(409).json({error: "Email ja cadastrado"});

        const newUser = await UserService.create({name, email, password});

        const payload = {id: newUser.id, name: newUser.name, email: newUser.email};
        const token = signToken(payload);

        return res.json({ token, user: payload });
    }catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({error : "Error interno"});
    }
};


export const login = async (req : Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await UserService.findByEmail(email);
        if(!user) {
             return res.status(400).json({ error: "Usuário não encontrado" });
        }
        const valid = await bcrypt.compare(password, user.password);

        if(!valid) {
            return res.status(400).json({error: "Senha inválida"})
        }
        
        const token = signToken({
            id : user.id,
            email: user.email,
            name: user.name
        });

        return res.json({
            token,
            user: {
                id : user.id,
                email: user.email,
                name: user.name
            }
        });


}catch (err) {
            console.error("Login error:", err);
        return res.status(500).json({ error: "Erro interno" });
  }
}

export const profile = (req: Request, res: Response) => {

    return res.json({ user: req.user });
};
"use client";

import { useState } from "react";
import api from "@/utils/apiAuth";
import Link from "next/link";
import { toast } from "react-hot-toast"; // CORRETO
import { useRouter } from "next/navigation";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const router = useRouter();

  const lidaComCadastro = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Preencha todos os campos.");
      return;
    }

    try {
      await api.post("/cadastro", { name, email, password });
      toast.success("Conta criada com sucesso!");

      setTimeout(() => {
        router.push("/login");
      }, 1200);
   } catch (err: any) {
  console.log("ERRO NO CADASTRO:", err.response?.data);
  toast.error(err.response?.data?.error || "Erro ao criar conta.");
}
  };

  return (
    <div className="flex min-h-screen">

      <div className="hidden lg:block w-1/2 relative">
        <img
          src="/img-04.jpg"
          alt="Login background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="bg-[#3b5353] w-full lg:w-1/2 flex items-center justify-center p-10">
        <div className="w-full max-w-md space-y-5">

          <h1 className="text-5xl font-extrabold text-white">
            Seu cadastro é o primeiro passo para um aço mais verde.
          </h1>

          <p className="mt-6 text-lg text-white font-extrabold">
            Participe da revolução do carbono neutro
          </p>

          <form onSubmit={lidaComCadastro} className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent border-0 border-b border-white/30
              focus:border-white/60 focus:outline-none
              text-white placeholder-white/40
              p-2 transition-all duration-300"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-0 border-b border-white/30
              focus:border-white/60 focus:outline-none
              text-white placeholder-white/40
              p-2 transition-all duration-300"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent border-0 border-b border-white/30
              focus:border-white/60 focus:outline-none
              text-white placeholder-white/40
              p-2 transition-all duration-300"
            />

            <button
              type="submit"
              className="
              bg-amber-500 text-white font-semibold
              px-5 py-3 rounded-xl
              shadow-lg shadow-black/20
              hover:shadow-xl hover:shadow-black/30
              hover:bg-amber-600
              active:scale-95
              transition-all duration-300
              "
            >
              Cadastre-se
            </button>

          </form>

          <p className="text-white/60 text-sm text-center font-bold">
            Já tem uma conta?{" "}
            <Link
              href="/login"
              className="text-white hover:text-amber-400 underline-offset-4 hover:underline transition"
            >
              Entrar
            </Link>
          </p>
        </div>
      </div>

    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useAuth } from "@/src/contexts/AuthContext";

export default function Login() {
  const searchParams = useSearchParams();
  const emailDaUrl = searchParams.get("email") || "";

  const { login, error } = useAuth(); // ← usamos login() do contexto

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Se houve email na URL, preenche automaticamente
  useEffect(() => {
    if (emailDaUrl) setEmail(emailDaUrl);
  }, [emailDaUrl]);

  // SUBMIT
  const lidaComLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Preencha todos os campos.");
      return;
    }

    setLoading(true);

    try {
      await login(email, password);
      // nada mais, o contexto já faz o push("/profile")
    } catch (err) {
      toast.error("Erro ao fazer login.");
    } finally {
      setLoading(false);
    }
  };

  // Se o contexto capturou erro, exibe aqui automaticamente
  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen">

   
      <div className="hidden lg:block w-1/2 relative">
        <img
          src="/img-03.jpg"
          alt="Login background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="bg-[#3b5353] w-full lg:w-1/2 flex items-center justify-center p-10">
        <div className="w-full max-w-md space-y-5">
          <h1 className="text-5xl font-extrabold text-white">
            Acesse sua conta e ajude a forjar um amanhã sustentável.
          </h1>

          <p className="mt-6 text-lg text-white font-extrabold">
            Produzir aço de forma sustentável é possível — e estamos construindo esse futuro agora.
          </p>

          <form onSubmit={lidaComLogin} className="flex flex-col gap-4">
  
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-0 border-b border-white/30
                focus:border-white/60 focus:outline-none
                text-white placeholder-white/40 p-2"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent border-0 border-b border-white/30
                focus:border-white/60 focus:outline-none
                text-white placeholder-white/40 p-2"
            />


            <button
              disabled={loading}
              className="bg-amber-500 text-white font-semibold px-5 py-3 rounded-xl shadow-lg
                hover:bg-amber-600 active:scale-95 transition"
            >
              {loading ? "Entrando..." : "Login"}
            </button>

            <p className="text-white/60 text-sm text-center font-bold">
              Novo por aqui?{" "}
              <Link
                href="/cadastro"
                className="text-white hover:text-amber-400 underline-offset-4 hover:underline transition"
              >
                Cadastre-se
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

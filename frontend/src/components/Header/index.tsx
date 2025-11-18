'use client'

import { useState } from "react";
import { useRouter } from "next/navigation"; // <- CORRETO!
import Link from "next/link";

export default function Header() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const pegaKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (email.trim() === "") return;
      router.push(`/login?email=${encodeURIComponent(email)}`);
    }
  };

  return (
    <section className="px-6 py-24 text-center max-w-7xl mx-auto z-10">

      <h1 className="text-5xl font-extrabold text-white max-w-4xl mx-auto">
        Primeira usina siderúrgica carbono neutro do mundo
      </h1>

      <p className="mt-6 text-lg max-w-2xl mx-auto text-white font-extrabold">
        Produzir aço de forma sustentável é possível — e estamos construindo esse futuro agora.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">

        <div className="flex items-center gap-2 bg-black/95 rounded-xl p-1 shadow-lg">

          <input
            type="email"
            placeholder="Entre com seu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={pegaKeyPress}
            className="w-64 px-4 py-3 rounded-xl text-white placeholder:text-white
                       focus:outline-none focus:ring-2 focus:ring-green-300"
          />

          <button
            onClick={() =>
              router.push(`/login?email=${encodeURIComponent(email)}`)
            }
            className="
              px-6 py-3 rounded-xl  bg-amber-500 text-white 
              font-semibold inline-block
            "
          >
            Entrar em sua conta
          </button>

        </div>

        <Link
          href="/cadastro"
          className="px-6 py-3 rounded-xl bg-black text-white font-medium backdrop-blur-sm"
        >
          Cadastre-se
        </Link>

      </div>
    </section>
  );
}

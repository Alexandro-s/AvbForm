"use client";

import { useAuth } from "@/src/contexts/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-900 p-4 flex justify-between items-center">
        {user ? (
          <>
            <span className="text-amber-300 font-semibold z-50">Olá, {user.name}</span>
            <button
              onClick={logout}
              className="bg-amber-500 text-black px-4 py-2 rounded hover:bg-amber-600 transition z-50"
            >
              Sair
            </button>
          </>
        ) : (
          <span className="text-amber-300">Você não está logado</span>
        )}
      </nav>
      <main className="flex-1 p-8 bg-gray-100">
        {user ? (
          <h1 className="flex items-center justify-center text-2xl font-bold text-gray-800">
           A decadência é a perda total da inconsciência; porque a inconsciência é o fundamento da vida. O coração, se pudesse pensar, pararia {user.name}!
          </h1>
        ) : (
          <p className="text-gray-700">Você precisa fazer login para acessar esta página.</p>
        )}
      </main>
    </div>
  );
}

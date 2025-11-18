"use client"

import { useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useRouter } from "next/navigation"

export const  useProtectedRoute  = () => {
    const { user } = useAuth();
    const router = useRouter();


    useEffect(() => {
        if(!user) router.push("/")

    }, [user, router])
}
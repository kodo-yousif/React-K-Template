/* eslint-disable no-unused-vars */
import { create } from "zustand"
import { persist } from "zustand/middleware"

type User = {
  name: string | null
}

type UserState = {
  name: string | null
  setUser: (user: User) => void
}

export const useUser = create<UserState>()(
  persist(
    (set) => ({
      name: null,
      setUser: (user: User) => set(user),
    }),
    {
      name: "user",
    }
  )
)

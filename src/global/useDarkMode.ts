import { create } from "zustand"
import { persist } from "zustand/middleware"

type DarkModeState = {
  isDark: boolean
  toggleTheme: () => void
}

export const useDarkMode = create<DarkModeState>()(
  persist(
    (set, get) => ({
      isDark: false,
      toggleTheme: () => set({ isDark: !get().isDark }),
    }),
    {
      name: "isDarkMode",
    }
  )
)

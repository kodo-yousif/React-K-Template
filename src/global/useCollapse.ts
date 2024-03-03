import { create } from "zustand"
import { persist } from "zustand/middleware"

type CollapseState = {
  collapse: boolean
  toggleCollapse: () => void
}

export const useCollapse = create<CollapseState>()(
  persist(
    (set, get) => ({
      collapse: false,
      toggleCollapse: () => set({ collapse: !get().collapse }),
    }),
    {
      name: "collapsed",
    }
  )
)

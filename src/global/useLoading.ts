/* eslint-disable no-unused-vars */
import { create } from "zustand"

type LoadingState = {
  fields: string[]
  setField: (field: string) => void
  removeField: (field: string) => void
}

export const useLoading = create<LoadingState>()((set, get) => ({
  fields: [],
  setField: (field: string) => set({ fields: [...get().fields, field] }),
  removeField: (field: string) =>
    set({ fields: get().fields.filter((element) => element !== field) }),
}))

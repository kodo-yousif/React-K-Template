import { useEffect, useState } from "react"
import { useNavigation } from "react-router-dom"

import { useLoading } from "@/global/useLoading"
import { Spin } from "antd"

export const GlobalLoading = () => {
  const navigation = useNavigation()

  const { fields } = useLoading()
  const [isNavigating, setIsNavigating] = useState(navigation.state !== "idle")

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>

    if (navigation.state !== "idle") {
      timeoutId = setTimeout(() => setIsNavigating(true), 100)
    } else {
      setIsNavigating(false)
    }

    return () => clearTimeout(timeoutId)
  }, [navigation.state])

  if (!(isNavigating || fields.length !== 0)) return null

  return (
    <div className="fixed rounded p-2 flex !scale-75 gap-2 flex-col px-2 py-3 !bg-white right-4 bottom-4">
      <Spin tip="Loading" size="default" />
      <span className="text-sm">Loading...</span>
    </div>
  )
}

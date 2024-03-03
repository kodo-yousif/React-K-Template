import Header from "@/components/Header"
import Kilwa from "@/assets/71QlZuD0h2L._AC_SX466_.jpg"

export default function App() {
  return (
    <div className="bg-red-500">
      <Header />
      <div>
        <img src={Kilwa} />
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  )
}

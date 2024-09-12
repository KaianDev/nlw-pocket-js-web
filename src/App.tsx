import { PlusIcon } from "lucide-react"

import logo from "./assets/logo.svg"
import illustrationLetStart from "./assets/illustration-let-start.svg"

export const App = () => {
  return (
    <h1 className="h-screen w-full flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={illustrationLetStart} alt="Illustration let start" />
      <div className="max-w-80 flex flex-col gap-5 items-center">
        <p className="text-zinc-300 leading-relaxed text-center">
          Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora
          mesmo?
        </p>

        <button
          type="button"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-violet-500 text-violet-50 text-sm tracking-tight font-medium hover:bg-violet-600">
          <PlusIcon className="size-4" />
          Cadastrar meta
        </button>
      </div>
    </h1>
  )
}

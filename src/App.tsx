import { PlusIcon } from "lucide-react"

import logo from "./assets/logo.svg"
import illustrationLetStart from "./assets/illustration-let-start.svg"
import { Button } from "./components/ui/button"

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

        <Button>
          <PlusIcon className="size-4" />
          Cadastrar meta
        </Button>
      </div>
    </h1>
  )
}

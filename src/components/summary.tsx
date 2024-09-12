import { CheckCircle2Icon, PlusIcon } from "lucide-react"
import { Button } from "./ui/button"
import { DialogTrigger } from "./ui/dialog"
import { InOrbitIcon } from "./ui/in-orbit-icon"
import { Progress, ProgressIndicator } from "./ui/progress-bar"
import { Separator } from "./ui/separator"
import { OutlineButton } from "./ui/outline-button"

export const Summary = () => {
  return (
    <main className="max-w-[400px] w-full mx-auto pt-10 flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <h1 className="text-lg font-medium">05 a 12 de Setembro</h1>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <PlusIcon className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </header>

      <div className="space-y-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: "50%" }} />
        </Progress>

        <div className="flex items-center justify-between">
          <p className="text-zinc-400 text-sm">
            Você completou <span className="text-zinc-100">8</span> de{" "}
            <span className="text-zinc-100">15</span> metas nessa semana.
          </p>

          <span className="text-sm text-zinc-400">58%</span>
        </div>
      </div>

      <Separator />

      <div className="flex items-center flex-wrap gap-2">
        <OutlineButton>
          <PlusIcon className="size-4 text-zinc-400" />
          Meditar
        </OutlineButton>
        <OutlineButton>
          <PlusIcon className="size-4 text-zinc-400" />
          Estudar
        </OutlineButton>
        <OutlineButton>
          <PlusIcon className="size-4 text-zinc-400" />
          Fazer companhia a esposa
        </OutlineButton>
        <OutlineButton disabled>
          <PlusIcon className="size-4 text-zinc-400" />
          Acordar cedo
        </OutlineButton>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-medium text-zinc-100">Sua semana</h2>

        <div className="space-y-3">
          <h3 className="text-zinc-100 font-medium">
            Hoje{" "}
            <span className="text-xs text-zinc-400 font-normal">
              (06 de agosto)
            </span>
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <CheckCircle2Icon className="size-4 text-pink-500" />
              <p className="text-zinc-400 text-sm">
                Você completou "
                <span className="text-zinc-100 font-medium">Acordar cedo</span>"
                às "<span className="text-zinc-100">8:30h</span>"
              </p>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2Icon className="size-4 text-pink-500" />
              <p className="text-zinc-400 text-sm">
                Você completou "
                <span className="text-zinc-100 font-medium">Estudar</span>" às "
                <span className="text-zinc-100">23:37h</span>"
              </p>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-zinc-100 font-medium">
            Ontem{" "}
            <span className="text-xs text-zinc-400 font-normal">
              (05 de agosto)
            </span>
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <CheckCircle2Icon className="size-4 text-pink-500" />
              <p className="text-zinc-400 text-sm">
                Você completou "
                <span className="text-zinc-100 font-medium">Acordar cedo</span>"
                às "<span className="text-zinc-100">7:30h</span>"
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

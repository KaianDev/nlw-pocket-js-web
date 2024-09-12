import { PlusIcon, XIcon } from "lucide-react"

import { Button } from "./components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog"
import logo from "./assets/logo.svg"
import illustrationLetStart from "./assets/illustration-let-start.svg"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from "./components/ui/radio-group"

export const App = () => {
  return (
    <Dialog>
      <main className="h-screen w-full flex flex-col items-center justify-center gap-8">
        <img src={logo} alt="in.orbit" />
        <img src={illustrationLetStart} alt="Illustration let start" />
        <div className="max-w-80 flex flex-col gap-5 items-center">
          <p className="text-zinc-300 leading-relaxed text-center">
            Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora
            mesmo?
          </p>

          <DialogTrigger asChild>
            <Button>
              <PlusIcon className="size-4" />
              Cadastrar meta
            </Button>
          </DialogTrigger>
        </div>
      </main>
      <DialogContent>
        <div className="flex flex-col gap-6 h-full">
          <div className="space-y-3">
            <div className="flex items-center justify-between ">
              <DialogTitle>Cadastrar meta</DialogTitle>
              <DialogClose>
                <XIcon className="size-5 text-zinc-600" />
              </DialogClose>
            </div>
            <DialogDescription>
              Adicione atividades que te fazem bem e que você quer continuar
              praticando toda semana.
            </DialogDescription>
          </div>

          <form className="flex flex-col justify-between h-full">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Qual a atividade?</Label>
                <Input
                  id="title"
                  autoFocus
                  placeholder="Praticar exercícios, meditar, etc..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Quantas vezes na semana?</Label>
                <RadioGroup>
                  <RadioGroupItem value="1">
                    <RadioGroupIndicator />
                    <span className="text-sm font-medium text-zinc-300">
                      1x na semana
                    </span>
                    <span className="text-lg">🥱</span>
                  </RadioGroupItem>
                  <RadioGroupItem value="2">
                    <RadioGroupIndicator />
                    <span className="text-sm font-medium text-zinc-300">
                      2x na semana
                    </span>
                    <span className="text-lg">🙂</span>
                  </RadioGroupItem>
                  <RadioGroupItem value="3">
                    <RadioGroupIndicator />
                    <span className="text-sm font-medium text-zinc-300">
                      1x na semana
                    </span>
                    <span className="text-lg">😎</span>
                  </RadioGroupItem>
                </RadioGroup>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Fechar
                </Button>
              </DialogClose>
              <Button type="submit">Salvar</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

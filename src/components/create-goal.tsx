import { XIcon } from "lucide-react"

import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from "./ui/radio-group"
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog"
import { Button } from "./ui/button"

export const CreateGoal = () => {
  return (
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
                  <span className="text-sm font-medium text-zinc-300 leading-none">
                    1x na semana
                  </span>
                  <span className="text-lg">🥱</span>
                </RadioGroupItem>
                <RadioGroupItem value="2">
                  <RadioGroupIndicator />
                  <span className="text-sm font-medium text-zinc-300 leading-none">
                    2x na semana
                  </span>
                  <span className="text-lg">🙂</span>
                </RadioGroupItem>
                <RadioGroupItem value="3">
                  <RadioGroupIndicator />
                  <span className="text-sm font-medium text-zinc-300 leading-none">
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
  )
}

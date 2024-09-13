import { z } from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { XIcon } from "lucide-react"
import { useQueryClient } from "@tanstack/react-query"

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
import { desiredWeeklyFrequencyOptions } from "../data/desired-weekly-frequency-options"
import { createGoal } from "../http/create-goal"

const createGoalFormSchema = z.object({
  title: z.string().min(1, "Informe a atividade que deseja realizar"),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

interface CreateGoalProps {
  closeDialog(): void
}

export const CreateGoal = ({ closeDialog }: CreateGoalProps) => {
  const queryClient = useQueryClient()

  const { register, formState, control, handleSubmit, reset } = useForm<
    z.infer<typeof createGoalFormSchema>
  >({
    resolver: zodResolver(createGoalFormSchema),
  })

  const handleCreateGoalSubmit = handleSubmit(
    async ({ desiredWeeklyFrequency, title }) => {
      await createGoal({ desiredWeeklyFrequency, title })
      queryClient.invalidateQueries({ queryKey: ["summary"] })
      queryClient.invalidateQueries({ queryKey: ["pending-goals"] })

      reset()
      closeDialog()
    }
  )

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

        <form
          onSubmit={handleCreateGoalSubmit}
          className="flex flex-col justify-between h-full">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Qual a atividade?</Label>
              <Input
                id="title"
                autoFocus
                placeholder="Praticar exercícios, meditar, etc..."
                {...register("title")}
              />
              {formState.errors.title && (
                <p className="text-xs text-red-400">
                  {formState.errors.title.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="title">Quantas vezes na semana?</Label>
              <Controller
                control={control}
                defaultValue={3}
                name="desiredWeeklyFrequency"
                render={({ field }) => (
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={String(field.value)}>
                    {desiredWeeklyFrequencyOptions.map((option) => (
                      <RadioGroupItem key={option.value} value={option.value}>
                        <RadioGroupIndicator />
                        <span className="text-sm font-medium text-zinc-300 leading-none">
                          {option.title}
                        </span>
                        <span className="text-lg">{option.emoji}</span>
                      </RadioGroupItem>
                    ))}
                  </RadioGroup>
                )}
              />
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

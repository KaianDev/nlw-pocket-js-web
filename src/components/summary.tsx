import dayjs from "dayjs"
import ptBR from "dayjs/locale/pt-br"
import isToday from "dayjs/plugin/isToday"
import isYesterday from "dayjs/plugin/isYesterday"
import { CheckCircle2Icon, PlusIcon } from "lucide-react"

import { Button } from "./ui/button"
import { DialogTrigger } from "./ui/dialog"
import { InOrbitIcon } from "./ui/in-orbit-icon"
import { Progress, ProgressIndicator } from "./ui/progress-bar"
import { Separator } from "./ui/separator"
import { PendingGoals } from "./pending-goals"

import { useSummary } from "../hooks/use-summary"
import { useMemo } from "react"

dayjs.locale(ptBR)
dayjs.extend(isToday)
dayjs.extend(isYesterday)

export const Summary = () => {
  const { data } = useSummary()

  if (!data) return null

  const firstDayOfWeek = dayjs().startOf("week").format("D MMM")
  const lastDayOfWeek = dayjs().endOf("week").format("D MMM")

  const completedPercentage = useMemo(() => {
    if (!data.totalDesiredFrequency) return 0
    return Math.round(
      (data.totalCompletions / data.totalDesiredFrequency) * 100
    )
  }, [data.totalCompletions, data.totalDesiredFrequency])

  return (
    <main className="max-w-[480px] w-full mx-auto py-10 flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <h1 className="text-lg font-medium capitalize">
            {firstDayOfWeek} - {lastDayOfWeek}
          </h1>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <PlusIcon className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </header>

      <div className="space-y-3">
        <Progress
          value={data.totalCompletions}
          max={data.totalDesiredFrequency!}>
          <ProgressIndicator style={{ width: `${completedPercentage}%` }} />
        </Progress>

        <div className="flex items-center justify-between">
          <p className="text-zinc-400 text-sm">
            Você completou{" "}
            <span className="text-zinc-100">{data.totalCompletions}</span> de{" "}
            <span className="text-zinc-100">{data.totalDesiredFrequency}</span>{" "}
            metas nessa semana.
          </p>

          <span className="text-sm text-zinc-400">{completedPercentage}%</span>
        </div>
      </div>

      <Separator />

      <PendingGoals />

      <div className="space-y-6">
        <h2 className="text-xl font-medium text-zinc-100">Sua semana</h2>

        {data.completionsByDate ? (
          Object.entries(data.completionsByDate).map(([date, goals]) => {
            const weekDay = dayjs(date).format("dddd")
            const displayWeekDay = dayjs(date).isToday()
              ? "hoje"
              : dayjs(date).isYesterday()
              ? "ontem"
              : weekDay

            const formattedDate = dayjs(date).format("DD[ de ]MMMM")

            return (
              <div key={date} className="space-y-3">
                <h3 className="text-zinc-100 font-medium">
                  <span className="capitalize">{displayWeekDay}</span>{" "}
                  <span className="text-xs text-zinc-400 font-normal">
                    ({formattedDate})
                  </span>
                </h3>
                <ul className="flex flex-col gap-2">
                  {goals.map((goal) => {
                    const time = dayjs(goal.completedAt).format("HH:mm")

                    return (
                      <li key={goal.id} className="flex items-center gap-2">
                        <CheckCircle2Icon className="size-4 text-pink-500" />
                        <p className="text-zinc-400 text-sm">
                          Você completou "
                          <span className="text-zinc-100 font-medium">
                            {goal.title}
                          </span>
                          " às "<span className="text-zinc-100">{time}h</span>"
                        </p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })
        ) : (
          <p className="text-sm text-zinc-400 text-center">
            Você ainda não completou nenhuma atividade nessa semana. <br />{" "}
            Vamos começar! 🚀
          </p>
        )}
      </div>
    </main>
  )
}

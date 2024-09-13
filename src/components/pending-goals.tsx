import { PlusIcon } from "lucide-react"
import { OutlineButton } from "./ui/outline-button"
import { usePendingGoals } from "../hooks/use-pending-goals"

export const PendingGoals = () => {
  const { data } = usePendingGoals()

  if (!data) return null

  return (
    <div className="flex items-center flex-wrap gap-2">
      {data.map((goal) => {
        const isCompletedGoal =
          goal.completionCount >= goal.desiredWeeklyFrequency
        return (
          <OutlineButton key={goal.id} disabled={isCompletedGoal}>
            <PlusIcon className="size-4 text-zinc-400" />
            {goal.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}

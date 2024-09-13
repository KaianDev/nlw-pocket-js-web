import { PlusIcon } from "lucide-react"
import { OutlineButton } from "./ui/outline-button"
import { usePendingGoals } from "../hooks/use-pending-goals"
import { createGoalCompletion } from "../http/create-goal-completion"
import { useQueryClient } from "@tanstack/react-query"

export const PendingGoals = () => {
  const { data } = usePendingGoals()
  const queryClient = useQueryClient()

  if (!data) return null

  const handleCompletionGoal = async (goalId: string) => {
    await createGoalCompletion({ goalId })
    queryClient.invalidateQueries({ queryKey: ["summary"] })
    queryClient.invalidateQueries({ queryKey: ["pending-goals"] })
  }

  return (
    <div className="flex items-center flex-wrap gap-2">
      {data.map((goal) => {
        const isCompletedGoal =
          goal.completionCount >= goal.desiredWeeklyFrequency
        return (
          <OutlineButton
            key={goal.id}
            onClick={() => handleCompletionGoal(goal.id)}
            disabled={isCompletedGoal}>
            <PlusIcon className="size-4 text-zinc-400" />
            {goal.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}

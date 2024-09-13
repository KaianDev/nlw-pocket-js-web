import { http } from "../lib/axios"

interface CreateGoalCompletionRequest {
  goalId: string
}

export const createGoalCompletion = async ({
  goalId,
}: CreateGoalCompletionRequest) => {
  await http.post("/completion", { goalId })
}

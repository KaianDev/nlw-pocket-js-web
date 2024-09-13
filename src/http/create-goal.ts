import { http } from "../lib/axios"

interface CreateGoalRequest {
  title: string
  desiredWeeklyFrequency: number
}

export const createGoal = async ({
  desiredWeeklyFrequency,
  title,
}: CreateGoalRequest) => {
  await http.post("/goals", { desiredWeeklyFrequency, title })
}

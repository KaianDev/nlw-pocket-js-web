import { http } from "../lib/axios"

interface GetPendingGoalsResponse {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}

export const getPendingGoals = async () => {
  const { data } = await http.get("/pending-goals")
  return data.pendingGoals as GetPendingGoalsResponse[]
}

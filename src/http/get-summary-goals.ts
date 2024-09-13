import { http } from "../lib/axios"

type CompletionsByDate = Record<
  string,
  {
    id: string
    title: string
    completedAt: string
  }[]
>
interface GetSummaryGoalsResponse {
  totalCompletions: number
  totalDesiredFrequency: number | null
  completionsByDate: CompletionsByDate | null
}

export const getSummaryGoals = async () => {
  const { data } = await http.get("/summary")
  return data.summary as GetSummaryGoalsResponse
}

import { useQuery } from "@tanstack/react-query"
import { getSummaryGoals } from "../http/get-summary-goals"

export const useSummary = () =>
  useQuery({
    queryKey: ["summary"],
    queryFn: getSummaryGoals,
    staleTime: 1000 * 60, // 60s
  })

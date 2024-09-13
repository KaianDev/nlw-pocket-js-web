import { useQuery } from "@tanstack/react-query"
import { getPendingGoals } from "../http/get-pending-goals"

export const usePendingGoals = () =>
  useQuery({
    queryKey: ["pending-goals"],
    queryFn: getPendingGoals,
  })

import { Dialog } from "./components/ui/dialog"
import { CreateGoal } from "./components/create-goal"
import { EmptyGoals } from "./components/empty-goals"
import { Summary } from "./components/summary"

import { useSummary } from "./hooks/use-summary"

export const App = () => {
  const { data } = useSummary()

  return (
    <Dialog>
      {data && data.totalDesiredFrequency === 0 ? <EmptyGoals /> : <Summary />}
      <CreateGoal />
    </Dialog>
  )
}

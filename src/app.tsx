import { Dialog } from "./components/ui/dialog"
import { CreateGoal } from "./components/create-goal"
import { EmptyGoals } from "./components/empty-goals"
import { Summary } from "./components/summary"

import { useSummary } from "./hooks/use-summary"
import { useState } from "react"

export const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { data } = useSummary()

  const handleCloseDialog = () => setIsDialogOpen(false)

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      {data && data.totalDesiredFrequency === 0 ? <EmptyGoals /> : <Summary />}
      <CreateGoal closeDialog={handleCloseDialog} />
    </Dialog>
  )
}

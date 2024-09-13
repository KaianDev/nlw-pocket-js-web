import { useState } from "react"

import { Dialog } from "./components/ui/dialog"
import { CreateGoal } from "./components/create-goal"
import { EmptyGoals } from "./components/empty-goals"
import { Summary } from "./components/summary"

import { useSummary } from "./hooks/use-summary"

export const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { data } = useSummary()

  const handleCloseDialog = () => setIsDialogOpen(false)

  const hasGoals = data?.totalDesiredFrequency

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      {!hasGoals ? <EmptyGoals /> : <Summary />}

      <CreateGoal closeDialog={handleCloseDialog} />
    </Dialog>
  )
}

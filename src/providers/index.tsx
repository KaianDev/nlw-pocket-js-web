import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "../lib/tanstack-query"
import type { PropsWithChildren } from "react"

type ProvidersProps = PropsWithChildren

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

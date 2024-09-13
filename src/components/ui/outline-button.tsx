import { type ComponentProps, forwardRef } from "react"
import { twMerge } from "tailwind-merge"

type OutlineButtonProps = ComponentProps<"button">

export const OutlineButton = forwardRef<HTMLButtonElement, OutlineButtonProps>(
  ({ ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={twMerge(
          "px-3 py-2 flex text-sm items-center justify-center gap-2 border border-dashed rounded-full bg-zinc-950 border-zinc-800 hover:border-zinc-700 outline-none focus:border-pink-500 focus-visible:ring-4 ring-pink-500/10 disabled:opacity-50 disabled:pointer-events-none",
          props.className
        )}
      />
    )
  }
)

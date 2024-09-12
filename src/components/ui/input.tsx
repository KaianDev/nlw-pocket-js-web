import { type ComponentProps, forwardRef } from "react"
import { twMerge } from "tailwind-merge"

type InputProps = ComponentProps<"input">

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={twMerge(
        "text-zinc-50 bg-black h-12 w-full flex items-center px-4 rounded-lg border border-zinc-900 placeholder-zinc-400 hover:border-zinc-800 focus-visible:border-pink-500 focus-visible:ring-4 ring-pink-500/10 outline-none",
        props.className
      )}
    />
  )
})

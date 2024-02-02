import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        bug:
          "border-transparent bg-emerald-500 text-emerald-50 hover:bg-emerald-600",
        dark:
          "border-transparent bg-slate-500 text-slate-50 hover:bg-dark-600",
        dragon:
          "border-transparent bg-indigo-500 text-indigo-50 hover:bg-indigo-600",
        electric:
          "border-transparent bg-yellow-500 text-yellow-50 hover:bg-yellow-600",
        fairy:
          "border-transparent bg-rose-400 text-rose-50 hover:bg-rose-500",
        fighting:
          "border-transparent bg-orange-600 text-red-50 hover:bg-orange-700",
        fire:
          "border-transparent bg-red-500 text-red-50 hover:bg-red-600",
        flying:
          "border-transparent bg-cyan-500 text-cyan-50 hover:bg-cyan-600",
        ghost:
          "border-transparent bg-violet-500 text-violet-50 hover:bg-violet-600",
        grass:
          "border-transparent bg-green-500 text-green-50 hover:bg-green-600",
        ground:
          "border-transparent bg-amber-700 text-amber-50 hover:bg-amber-800",
        ice:
          "border-transparent bg-sky-400 text-sky-50 hover:bg-sky-500",
        normal:
          "border-transparent bg-foreground text-background hover:bg-foreground/80",
        poison:
          "border-transparent bg-purple-500 text-purple-50 hover:bg-purple-600",
        psychic:
          "border-transparent bg-pink-500 text-pink-50 hover:bg-pink-600",
        rock:
          "border-transparent bg-amber-500 text-amber-50 hover:bg-amber-600",
        steel:
          "border-transparent bg-gray-500 text-gray-50 hover:bg-gray-600",
        water:
          "border-transparent bg-blue-500 text-blue-50 hover:bg-blue-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

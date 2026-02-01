import { cn } from '@/lib/utils'

<<<<<<< HEAD
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted', className)}
=======
function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('bg-accent animate-pulse rounded-md', className)}
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
      {...props}
    />
  )
}

export { Skeleton }

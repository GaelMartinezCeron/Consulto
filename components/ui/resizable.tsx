'use client'

<<<<<<< HEAD
import { GripVertical } from 'lucide-react'
=======
<<<<<<< HEAD
import { GripVertical } from 'lucide-react'
=======
import * as React from 'react'
import { GripVerticalIcon } from 'lucide-react'
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
import * as ResizablePrimitive from 'react-resizable-panels'

import { cn } from '@/lib/utils'

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
      className,
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
<<<<<<< HEAD
=======
=======
function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
        className,
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      'relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90',
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)
<<<<<<< HEAD
=======
=======
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        'bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90',
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

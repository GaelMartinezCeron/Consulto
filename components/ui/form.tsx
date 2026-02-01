'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import {
  Controller,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
<<<<<<< HEAD
=======
=======
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
} from 'react-hook-form'

import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
<<<<<<< HEAD
  const { getFieldState, formState } = useFormContext()

=======
<<<<<<< HEAD
  const { getFieldState, formState } = useFormContext()

=======
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
)

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
<<<<<<< HEAD
=======
=======
function FormItem({ className, ...props }: React.ComponentProps<'div'>) {
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
      <div ref={ref} className={cn('space-y-2', className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = 'FormItem'

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
<<<<<<< HEAD
=======
=======
      <div
        data-slot="form-item"
        className={cn('grid gap-2', className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
  const { error, formItemId } = useFormField()

  return (
    <Label
<<<<<<< HEAD
      ref={ref}
      className={cn(error && 'text-destructive', className)}
=======
<<<<<<< HEAD
      ref={ref}
      className={cn(error && 'text-destructive', className)}
=======
      data-slot="form-label"
      data-error={!!error}
      className={cn('data-[error=true]:text-destructive', className)}
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
      htmlFor={formItemId}
      {...props}
    />
  )
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
})
FormLabel.displayName = 'FormLabel'

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
<<<<<<< HEAD
=======
=======
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
<<<<<<< HEAD
      ref={ref}
=======
<<<<<<< HEAD
      ref={ref}
=======
      data-slot="form-control"
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
})
FormControl.displayName = 'FormControl'

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
<<<<<<< HEAD
=======
=======
}

function FormDescription({ className, ...props }: React.ComponentProps<'p'>) {
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
  const { formDescriptionId } = useFormField()

  return (
    <p
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
      ref={ref}
      id={formDescriptionId}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
})
FormDescription.displayName = 'FormDescription'

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children
<<<<<<< HEAD
=======
=======
      data-slot="form-description"
      id={formDescriptionId}
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function FormMessage({ className, ...props }: React.ComponentProps<'p'>) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? '') : props.children
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e

  if (!body) {
    return null
  }

  return (
    <p
<<<<<<< HEAD
      ref={ref}
      id={formMessageId}
      className={cn('text-sm font-medium text-destructive', className)}
=======
<<<<<<< HEAD
      ref={ref}
      id={formMessageId}
      className={cn('text-sm font-medium text-destructive', className)}
=======
      data-slot="form-message"
      id={formMessageId}
      className={cn('text-destructive text-sm', className)}
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
      {...props}
    >
      {body}
    </p>
  )
<<<<<<< HEAD
})
FormMessage.displayName = 'FormMessage'
=======
<<<<<<< HEAD
})
FormMessage.displayName = 'FormMessage'
=======
}
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}

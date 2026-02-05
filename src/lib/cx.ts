/**
 * Utility function for conditionally joining CSS class names
 * Similar to clsx but lightweight for this project
 */
export function cx(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ')
}

/**
 * Type-safe class name utility for conditional styling
 */
export type ClassName = string | undefined | null | false

export function cn(...inputs: ClassName[]): string {
  return cx(...inputs)
}

/**
 * Simple delay
 *
 * @param { number } ms Timeout delay in milliseconds
 * @returns Nothing
 */
export async function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

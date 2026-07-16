export const logError = (message: string, error?: unknown) => {
  console.error(message, error)
}

export const logInfo = (message: string, data?: unknown) => {
  console.info(message, data)
}

export const logWarning = (message: string, data?: unknown) => {
  console.warn(message, data)
}

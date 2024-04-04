import { isAxiosError } from 'axios'

export const handleErrors = (e: unknown) => {
  let errorMessage: string;
  if(isAxiosError<ServerError>(e)) {
    errorMessage = e.response ? e.response.data.errorMessages[0].message : e.message;
  } else {
    errorMessage = (e as Error).message;
  }
  console.log(errorMessage)
}

export type _ErrorType = {
  message: string
}

type ServerError = {
  errorMessages: Array<{field: string, message: string}>
}

import { isAxiosError } from 'axios'
import { Dispatch } from 'redux'
import { setAppErrorAC, SetAppErrorACACType } from '../../app/app-reducer.ts'

export const handleError = (e: unknown, dispatch: ErrorUtilsDispatchType) => {
  let errorMessage: string;
  if(isAxiosError<ServerError>(e)) {
    errorMessage = e.response ? e.response.data.errorMessages[0].message : e.message;
  } else {
    errorMessage = (e as Error).message;
  }
  dispatch(setAppErrorAC(errorMessage))
}

type ServerError = {
  errorMessages: Array<{field: string, message: string}>
}

type ErrorUtilsDispatchType = Dispatch<SetAppErrorACACType>

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'APP/CHANGE-STATUS':
      return {...state, status: action.status}
    case 'APP/SET-APP-ERROR':
      return {...state, error: action.error}
    default:
      return state
  }
}

export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/CHANGE-STATUS', status} as const)
export const setAppErrorAC = (error: string| null) => ({type: 'APP/SET-APP-ERROR', error} as const)

export type SetAppStatusACType = ReturnType<typeof setAppStatusAC>
export type SetAppErrorACACType = ReturnType<typeof setAppErrorAC>
type ActionsType = SetAppStatusACType | SetAppErrorACACType

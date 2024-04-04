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
    default:
      return state
  }
}

export const changeAppStatusAC = (status: RequestStatusType) => ({type: 'APP/CHANGE-STATUS', status} as const)

type ChangeAppStatusACType = ReturnType<typeof changeAppStatusAC>
type ActionsType = ChangeAppStatusACType

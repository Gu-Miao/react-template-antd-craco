import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '.'

const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    plus(state, { payload }: { payload: number }) {
      state.value += payload
    },
    minus(state, { payload }: { payload: number }) {
      state.value -= payload
    }
  }
})

export const { plus, minus } = slice.actions
export const selectCounter = (state: RootState) => state.couter
export default slice.reducer

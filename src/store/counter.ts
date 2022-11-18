import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '.'

const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    add(state, { payload }: { payload: number }) {
      state.value += payload
    }
  }
})

export const { add } = slice.actions
export const selectCounter = (state: RootState) => state.couter
export default slice.reducer

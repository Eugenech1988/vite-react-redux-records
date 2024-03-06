import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

type Record = {
  title: string,
  text: string,
  active: boolean
}

type RecordState = {
  recordsList: Record[],
  selectedIndex: number | null,
  selectedFilter: string
}

const initialState: RecordState = {
  recordsList: [],
  selectedIndex: null,
  selectedFilter: 'all'
}

const recordSlice = createSlice({
  name: 'records',
  initialState,
  reducers: {
    addRecord: (state, action: PayloadAction<object>) => {
      state.recordsList.push({
        title: action.payload.title,
        text: action.payload.text,
        active: false
      })
    },
    toggleItemActive(state, action: PayloadAction<number>) {
      const item = state.recordsList.find((item, i) => i === action.payload);
      if (item) {
        item.active = !item.active;
      }
    },
    setSelectedItem(state, action: PayloadAction<number>) {
      state.selectedIndex = action.payload
    },
    setSelectedFilter(state, action: PayloadAction<string>) {
      state.selectedFilter = action.payload
    },
    clearRecordsList: (state) => {
      state.records = []
    },
  }
})

export const { addRecord, clearRecordsList, toggleItemActive, setSelectedItem, setSelectedFilter } = recordSlice.actions

export default recordSlice.reducer
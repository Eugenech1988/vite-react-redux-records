import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

interface Record {
  title: string,
  text: string,
  active: boolean
}

interface RecordState {
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
    addRecord: (state, action: PayloadAction<{title: string; text: string}>) => {
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
    setSelectedItem(state, action: PayloadAction<number | null>) {
      state.selectedIndex = action.payload
    },
    setSelectedFilter(state, action: PayloadAction<string>) {
      state.selectedFilter = action.payload
    },
    clearRecordsList: (state) => {
      state.recordsList = []
    },
  }
})

export const { addRecord, clearRecordsList, toggleItemActive, setSelectedItem, setSelectedFilter } = recordSlice.actions

export default recordSlice.reducer
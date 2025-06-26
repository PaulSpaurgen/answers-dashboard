import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Variable {
  id: string
  name: string
  isSelected: boolean
  description: string
}

interface ChartDataPoint {
  month: string
  value: number
  x: number
  y: number
}

interface DashboardState {
  chartData: ChartDataPoint[]
  selectedVariables: Variable[]
  hoveredDataPoint: ChartDataPoint | null
  isDrawerOpen: boolean
}

const initialState: DashboardState = {
  chartData: [
    { month: 'March', value: 0, x: 0, y: 0 },
    { month: 'April', value: 35000, x: 1, y: 35000 },
    { month: 'May', value: 20000, x: 2, y: 20000 },
    { month: 'June', value: 50000, x: 3, y: 50000 },
    { month: 'July', value: 40000, x: 4, y: 40000 },
    { month: 'August', value: 90000, x: 5, y: 90000 },
    { month: 'September', value: 62000, x: 6, y: 62000 },
    { month: 'October', value: 30000, x: 7, y: 30000 },
  ],
  selectedVariables: [],
  hoveredDataPoint: null,
  isDrawerOpen: false,
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setChartData: (state, action: PayloadAction<ChartDataPoint[]>) => {
      state.chartData = action.payload
    },
    setSelectedVariables: (state, action: PayloadAction<Variable[]>) => {
      state.selectedVariables = action.payload
    },
    toggleVariable: (state, action: PayloadAction<string>) => {
      const variable = state.selectedVariables.find(v => v.id === action.payload)
      if (variable) {
        variable.isSelected = !variable.isSelected
      }
    },
    setHoveredDataPoint: (state, action: PayloadAction<ChartDataPoint | null>) => {
      state.hoveredDataPoint = action.payload
    },
    setDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpen = action.payload
    },
  },
})

export const { 
  setChartData, 
  setSelectedVariables, 
  toggleVariable, 
  setHoveredDataPoint, 
  setDrawerOpen 
} = dashboardSlice.actions

export default dashboardSlice.reducer 
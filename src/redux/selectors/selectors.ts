import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'src/redux'
import { PathCoords } from 'src/types/stores/mapStore.interface'

export const selectMapStore = ({ mapStore }: RootState) => mapStore

export const selectPathCoords = createSelector(selectMapStore, ({ pathCoords, selectedCoords }) => ({
	pathCoords: pathCoords?.map((pathArray) => pathArray?.reverse()) as PathCoords[],
	selectedCoords
}))

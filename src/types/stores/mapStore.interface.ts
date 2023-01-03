export interface ICoords {
	id: number
	latFrom: number
	latTo: number
	lngFrom: number
	lngTo: number
}

export interface InitialMapState {
	selectedCoords: ICoords | null
	pathCoords: PathCoords[] | null
	isLoading: boolean
	error: IError | null
}

export type PathCoords = [number, number]

export interface IError {
	error: string
	message: string
}

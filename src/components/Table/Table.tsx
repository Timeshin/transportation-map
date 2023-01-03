import { Table } from 'antd'
import { useAppDispatch, useAppSelector } from 'src/hooks/redux'
import { columns, dataSource, IDataTypes } from './Table.meta'
import { ICoords } from 'src/types/stores/mapStore.interface'
import { selectCoordsAction } from 'src/redux/actions/map.action'
import { selectMapStore } from 'src/redux/selectors/selectors'

import './Table.css'

const TableComponent = () => {
	const { selectedCoords } = useAppSelector(selectMapStore)
	const dispatch = useAppDispatch()

	const onRowClickHandler = ({ key, latFrom, latTo, lngFrom, lngTo }: IDataTypes) => {
		if (selectedCoords?.id === key) return

		const coordsData: ICoords = {
			id: key,
			latFrom,
			latTo,
			lngFrom,
			lngTo
		}

		dispatch(selectCoordsAction(coordsData))
	}

	return (
		<Table
			rowClassName={({ key }) => (key === selectedCoords?.id ? 'active_row' : '')}
			columns={columns}
			dataSource={dataSource}
			className='table'
			pagination={false}
			onRow={(record) => ({
				onClick: () => onRowClickHandler(record)
			})}
			bordered
		/>
	)
}

export default TableComponent

import { useEffect } from 'react'
import Header from '../../components/header/Header'
import SearchMenu from '../../components/searchMenu/SearchMenu'
import SideBar from '../../components/sideBar/SideBar'

import { useTypedDispatch, useTypedSelector } from '../../hooks/redux'
import { requestBySkills } from '../../reducers/MainPageHhSlice'
import styles from './MainPage.module.css'
import MyPagination from '../../components/pagination/MyPagination'
import CityTabs from '../../components/tabsCity/TabsCity'
import { Outlet } from 'react-router-dom'

function MainPage() {
	const { skills, area, page, searchValue } = useTypedSelector(
		s => s.MainPageHhReducer
	)
	const dispatch = useTypedDispatch()

	useEffect(() => {
		dispatch(requestBySkills({ skills, area, page, searchValue }))
	}, [dispatch, skills, area, page, searchValue])

	return (
		<>
			<Header></Header>
			<SearchMenu></SearchMenu>
			<div className={styles.containerLayout}>
				<SideBar></SideBar>
				<div className={styles.positionVacancyAndPag}>
					<CityTabs />
					<Outlet />

					<MyPagination></MyPagination>
				</div>
			</div>
		</>
	)
}

export default MainPage

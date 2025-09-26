import VacancyCard from '../../ui/vacancyCard/VacancyCard'
import styles from './AboutMe.module.css'

function AboutMe() {
	return (
		<div className={styles.containerAboutMe}>
			<div className={styles.containerVacancyCardAboutMe}>
				<VacancyCard>
					<h1>Сероед Николай Владимирович</h1>
					<p>
						Привет! Я - Frontend-разработчик. Пишу приложения на React +
						TypeScript + Redux Toolkit
					</p>
				</VacancyCard>
			</div>
		</div>
	)
}

export default AboutMe

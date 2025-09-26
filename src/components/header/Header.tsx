import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import { Link, NavLink } from 'react-router-dom'

function Header() {
	return (
		<div className={styles.containerHeader}>
			<nav className={styles.containerNav}>
				<div className={styles.logo}>
					<Link to='/' className={styles.linkLogo}>
						<img src={logo} alt='Логотип Hh' />
						<h3 className={styles.textLogo}>.FrontEnd</h3>
					</Link>
				</div>
				<div className={styles.headerMenu}>
					<NavLink
						to='/vacancy'
						className={({ isActive }) => (isActive ? styles.jobLinkActive : '')}
					>
						<h4 className={styles.jobText}>Вакансии FE</h4>
					</NavLink>

					<NavLink
						to='/about'
						className={({ isActive }) =>
							isActive ? styles.aboutLinkActive : ''
						}
					>
						<h4 className={styles.aboutMe}>Обо мне</h4>
					</NavLink>
				</div>
				<div></div>
			</nav>
		</div>
	)
}

export default Header

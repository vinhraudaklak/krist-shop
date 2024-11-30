import { images } from "../../../assets/images";
import styles from "./Header.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronDown,
	faMagnifyingGlass,
	faCartShopping,
	faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import HeaderTop from "../HeaderTop/HeaderTop";

const navLinks = [
	{
		id: 1,
		title: "Shop",
		url: "",
		subNav: [
			{
				id: 11,
				title: "man",
				url: "",
			},
			{
				id: 12,
				title: "women",
				url: "",
			},
			{
				id: 13,
				title: "children",
				url: "",
			},
			{
				id: 14,
				title: "man",
				url: "",
			},
			{
				id: 15,
				title: "women",
				url: "",
			},
			{
				id: 16,
				title: "children",
				url: "",
			},
		],
	},
	{
		id: 2,
		title: "On sale",
		url: "",
	},
	{
		id: 3,
		title: "New Arrivals",
		url: "",
	},
	{
		id: 4,
		title: "Brands",
		url: "",
	},
];

function Header({ headerRef, headerHeight }) {
	return (
		<>
			<header className={styles.header} ref={headerRef}>
				<HeaderTop />
				<div className={`${styles.wrap} container`}>
					<div className={styles.wrapLogo}>
						<img src={images.logo}></img>
					</div>

					<ul className={styles.wrapMenu}>
						{navLinks.map((navLink) => (
							<li key={navLink.id} className={styles.itemNavLink}>
								{navLink.title}
								{navLink.subNav &&
									navLink.subNav.length > 0 && (
										<>
											<FontAwesomeIcon
												className={styles.item1Icon}
												icon={faChevronDown}
											/>
											<div
												// style={{ display: "none" }}
												className={
													styles.containerSubNav
												}
											>
												{navLink.subNav.map(
													(itemSubNav) => (
														<div
															className={
																styles.itemSubNav
															}
															key={itemSubNav.id}
														>
															{itemSubNav.title}
														</div>
													)
												)}
											</div>
										</>
									)}
							</li>
						))}
					</ul>

					<div className={styles.wrapSearch}>
						<div className={styles.SearchIcon}>
							<FontAwesomeIcon
								className={styles.iconSearch}
								icon={faMagnifyingGlass}
							/>
						</div>
						<input
							className={styles.searchInput}
							type="text"
							placeholder="Search for products..."
						/>
					</div>

					<div className={styles.wrapIcon}>
						<div className={styles.CartIcon}>
							<FontAwesomeIcon
								className={styles.iconCart}
								icon={faCartShopping}
							/>
						</div>
						<div className={styles.avatarIcon}>
							<FontAwesomeIcon
								className={styles.iconAvatar}
								icon={faUserTie}
							/>
						</div>
					</div>
				</div>
			</header>
			<div
				style={{
					height: `${headerHeight}px`,
				}}
			></div>
		</>
	);
}

export default Header;

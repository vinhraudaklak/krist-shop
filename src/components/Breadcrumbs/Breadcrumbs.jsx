import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

import styles from "./Breadcrumbs.module.scss";
import Separate from "../Separate/Separate";

const Breadcrumbs = () => {
	const location = useLocation();

	const paths = location.pathname.split("/").filter((path) => path); // Lọc bỏ các giá trị rỗng từ đầu

	const buildPath = (index) => "/" + paths.slice(0, index + 1).join("/"); // Xây dựng đường dẫn theo từng cấp

	return (
		<>
			<Separate />
			<div className={`${styles.wrap} container`}>
				<ul className={styles.wrapBreadcrumbs}>
					<li className={styles.itemBreadcrumbs}>
						<Link to="/">Home</Link>
						{paths.length > 0 && (
							<FontAwesomeIcon
								className={styles.iconRight}
								icon={faChevronRight}
							/>
						)}
					</li>

					{paths.map((path, index) => {
						const isLast = index === paths.length - 1;
						const currentPath = buildPath(index);
						return (
							<li key={index} className={styles.itemBreadcrumbs}>
								{isLast ? (
									path
								) : (
									<Link to={currentPath}>{path}</Link>
								)}
								{!isLast && (
									<FontAwesomeIcon
										className={styles.iconRight}
										icon={faChevronRight}
									/>
								)}
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default Breadcrumbs;

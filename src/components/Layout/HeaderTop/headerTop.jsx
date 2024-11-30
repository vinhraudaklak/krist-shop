import styles from "./headerTop.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function HeaderTop() {
	return (
		<div className={styles.headerTop}>
			<div className={`${styles.wrap} container`}>
				<p>
					Sign up and get 20% off to your first order.{" "}
					<a href=""> Sign Up Now</a>
				</p>
				<div className={styles.iconClose}>
					<FontAwesomeIcon icon={faX} />
				</div>
			</div>
		</div>
	);
}

export default HeaderTop;

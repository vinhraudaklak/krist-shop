import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./RatingStar.module.scss";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const RatingStar = ({ star = 5, size = 14 }) => {
	// Chuyển number thành array.
	const numberToArr = Array.from({ length: star }, (_, index) => index + 1);

	// kiểm tra xem số chẵn hay lẻ.
	const isInt = star && (star / 2) % 0.5 === 0;
	
	return (
		<div>
			<div
				className={styles.productRating}
				style={{ fontSize: `${size}px` }}
			>
				<div className={styles.productRatingStar}>
					{numberToArr.map((_, index) => {
						return <FontAwesomeIcon key={index} icon={faStar} />;
					})}
					{!isInt && <FontAwesomeIcon icon={faStarHalf} />}
				</div>

				<div className={styles.productRatingTotal}>
					{star}
					<span>/5</span>
				</div>
			</div>
		</div>
	);
};

export default RatingStar;

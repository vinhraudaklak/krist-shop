import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SectionFeedback.module.scss";
import {
	faArrowLeft,
	faArrowRight,
	faCircleCheck,
	faStar,
	faStarHalf,
} from "@fortawesome/free-solid-svg-icons";

const SectionFeedback = ({ informationComments }) => {
	return (
		<div className={`${styles.wrapper} container`}>
			<div className={styles.wrapTitleArrow}>
				<h1>OUR HAPPY CUSTOMERS</h1>
				<div className={styles.wrapIconArrow}>
					<div className={styles.faArrowLeft}>
						<FontAwesomeIcon icon={faArrowLeft} />
					</div>
					<div className={styles.faArrowRight}>
						<FontAwesomeIcon icon={faArrowRight} />
					</div>
				</div>
			</div>

			<div className={styles.wrapComments}>
				{informationComments.map((informationComment) => {
					// check star int of float
					const isInt =
						informationComment.star &&
						(informationComment.star / 2) % 0.5 === 0;

					// Convert star number to array
					// 5 => [0, 1 , 2, 3,]
					const numberToArr = Array.from(
						{ length: informationComment.star },
						(_, index) => index + 1
					);

					return (
						<div
							key={informationComment.id}
							className={styles.wrapComment}
						>
							<div className={styles.starRating}>
								{numberToArr.map((_, index) => {
									return (
										<FontAwesomeIcon
											key={index}
											icon={faStar}
										/>
									);
								})}

								{!isInt && (
									<FontAwesomeIcon icon={faStarHalf} />
								)}
							</div>
							<div className={styles.userName}>
								<span>{informationComment.name}</span>
								<FontAwesomeIcon
									className={styles.icon}
									icon={faCircleCheck}
								/>
							</div>
							<div className={styles.userComment}>
								{informationComment.comment}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SectionFeedback;

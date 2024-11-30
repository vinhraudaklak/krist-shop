import styles from "./Banner.module.scss";
import { images } from "../../assets/images";

const Banner = ({ headerHeight }) => {
	return (
		<div
			className={styles.containerBanner}
			style={{
				minHeight: `calc(100vh - ${headerHeight}px)`,
			}}
		>
			<div className={styles.wrap}>
				<div className={styles.wrapContent}>
					<h1 className={styles.contentTitle}>
						FIND CLOTHES THAT MATCHES YOUR STYLE
					</h1>
					<p className={styles.contentDesc}>
						Browse through our diverse range of meticulously crafted
						garments, designed to bring out your individuality and
						cater to your sense of style.
					</p>
					<button className={styles.btnBanner}>Shop Now</button>
					<div className={styles.contentAchievementTotal}>
						<div className={styles.wrapItem}>
							<span className={styles.wrapItemTop}>200+</span>
							<p className={styles.wrapItemBottom}>
								International Brands
							</p>
						</div>
						<div className={styles.wrapItemSeparate}></div>
						<div className={styles.wrapItem}>
							<span className={styles.wrapItemTop}>2,000+</span>
							<p className={styles.wrapItemBottom}>
								High-Quality Products
							</p>
						</div>
						<div className={styles.wrapItemSeparate}></div>
						<div className={styles.wrapItem}>
							<span className={styles.wrapItemTop}>30,000+</span>
							<p className={styles.wrapItemBottom}>
								Happy Customers
							</p>
						</div>
					</div>
				</div>

				<div className={styles.wrapImg}>
					<img src={images.imgBanner} />
				</div>
			</div>
		</div>
	);
};

export default Banner;

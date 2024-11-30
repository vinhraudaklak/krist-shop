import { images } from "../../assets/images";
import styles from "./SectionStyles.module.scss";

const SectionStyles = () => {
	return (
		<div className={`${styles.wrapStyles} container`}>
			<h1 className={styles.wrapStylesTitle}>BROWSE BY DRESS STYLEG</h1>

			<div className={styles.wrapSelectStyles}>
				<div className={styles.styleCasual}>
					<p className={styles.styleTitle}>Casual</p>
					<img src={images.casualStyle} />
				</div>
        <div className={styles.styleFormal}>
					<p className={styles.styleTitle}>Formal</p>
					<img src={images.formalStyle} />
				</div>
        <div className={styles.styleParty}>
					<p className={styles.styleTitle}>Party</p>
					<img src={images.partyStyle} />
				</div>
        <div className={styles.styleGym}>
					<p className={styles.styleTitle}>Gym</p>
					<img src={images.gymStyle} />
				</div>
			</div>
      
		</div>
	);
};

export default SectionStyles;

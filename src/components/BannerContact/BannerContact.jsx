import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./BannerContact.module.scss";
import { useEffect, useRef, useState } from "react";

const BannerContact = () => {
	const refHeightBanner = useRef();
	const [heightBanner, setHeightBanner] = useState(null);

	useEffect(() => {
		if (refHeightBanner.current.offsetHeight) {
			setHeightBanner(refHeightBanner.current.offsetHeight);
		}
	}, []);
	return (
		<div
			className={`${styles.wrapBanner}  container`}
			ref={refHeightBanner}
			style={{
				position: "relative",
				bottom: `calc(-${heightBanner / 2}px)`,
				marginTop: `calc(-${heightBanner / 2}px)`,
			}}
		>
			<h1 className={styles.titleBanner}>
				STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
			</h1>

			<div className={styles.wrapBannerContact}>
				<div className={styles.wrapInputEmail}>
					<FontAwesomeIcon
						className={styles.iconEnvelope}
						icon={faEnvelope}
					/>
					<input type="text" placeholder="Enter your email address" />
				</div>
				<button className={styles.btnSubscribe}>
					Subscribe to Newsletter
				</button>
			</div>
		</div>
	);
};

export default BannerContact;

import styles from "./Footer.module.scss";
import { images } from '../../../assets/images'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Separate from "../../Separate/Separate";
function Footer() {
	return (
		<div className={`${styles.ContainerFooter} containerFullWidth`}>
			<div className={`${styles.wrapFooterTop} container`}>
				<div className={styles.wrapSocialNetWork}>
					<div className={styles.logoBrand}>
						<img src={images.logo} />
					</div>
					<span className={styles.describe}>
					We have clothes that suits your style and which you’re proud to wear. From women to men.
					</span>
					<div className={styles.listIconSocial}>
						<div><FontAwesomeIcon icon={faTwitter} /></div>
						<div><FontAwesomeIcon icon={faFacebook} /></div>
						<div><FontAwesomeIcon icon={faInstagram} /></div>
						<div><FontAwesomeIcon icon={faGithub} /></div>
					</div>
				</div>

				<div className={styles.wrapLists}>
					<h2 className={styles.listTitle}>Company</h2>
					<ul className={styles.listLinks}>
						<li>About</li>
						<li>Features</li>
						<li>Works</li>
						<li>Career</li>
					</ul>
				</div>
				<div className={styles.wrapLists}>
					<h2 className={styles.listTitle}>Help</h2>
					<ul className={styles.listLinks}>
						<li>Customer Support</li>
						<li>Delivery Details</li>
						<li>Terms & Conditions</li>
						<li>Privacy Policy</li>
					</ul>
				</div>
				<div className={styles.wrapLists}>
					<h2 className={styles.listTitle}>FAQ</h2>
					<ul className={styles.listLinks}>
						<li>Account</li>
						<li>Manage Deliveries</li>
						<li>Orders</li>
						<li>Payments</li>
					</ul>
				</div>
				<div className={styles.wrapLists}>
					<h2 className={styles.listTitle}>Resources</h2>
					<ul className={styles.listLinks}>
						<li>Free eBooks</li>
						<li>Development Tutorial</li>
						<li>How to - Blog</li>
						<li>Youtube Playlist</li>
					</ul>
				</div>
				
			</div>

			<Separate />

			<div className={`${styles.wrapFooterBottom} container`}>
				<span className={styles.footerBottomTitle}>Shop.co © 2000-2023, All Rights Reserved</span>
				<div className={styles.wrapCardBank}>
					<div><img src={images.cardBank1} /></div>
					<div><img src={images.cardBank2} /></div>
					<div><img src={images.cardBank3} /></div>
					<div><img src={images.cardBank4} /></div>
					<div><img src={images.cardBank5} /></div>
				</div>
			</div>
		</div>
	);
}

export default Footer;

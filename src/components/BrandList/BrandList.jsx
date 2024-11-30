import styles from "./BrandList.module.scss";
import { images } from "../../assets/images";

function ShopByCategories() {
	return (
		<div className={`${styles.container} containerFullWidth`}>
			<ul className={`${styles.wrapBrandList} container`}>
				<li className="brandItem">
					<img src={images.brandVersace} />
				</li>
				<li className="brandItem">
					<img src={images.brandZara} />
				</li>
				<li className="brandItem">
					<img src={images.brandGucci} />
				</li>
				<li className="brandItem">
					<img src={images.brandPrada} />
				</li>
				<li className="brandItem">
					<img src={images.brandCalvin} />
				</li>
			</ul>
		</div>
	);
}

export default ShopByCategories;

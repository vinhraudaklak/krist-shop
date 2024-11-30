import styles from "./ProductCard.module.scss";
import RatingStar from "../RatingStar/RatingStar";

const ProductCard = ({ product }) => {
	return (
		<div key={product.id} className={styles.wrapProduct}>
			<div className={styles.productImg}>
				<img src={product.thumb} />
			</div>
			<p className={styles.productTitle}>{product.name}</p>

			<RatingStar star={product.star} />

			<div className={styles.productWrapPrice}>
				<div className={styles.productPriceDiscount}>
					{product.price}
				</div>
				<div className={styles.productPrice}>{product.price}</div>
				<div className={styles.productPercentDiscount}>-20%</div>
			</div>
		</div>
	);
};

export default ProductCard;

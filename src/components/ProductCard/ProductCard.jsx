import styles from "./ProductCard.module.scss";
import RatingStar from "../RatingStar/RatingStar";

const ProductCard = ({ product }) => {
	return (
		<div key={product.id} className={styles.wrapProduct}>
			<div className={styles.productImg}>
				<img src={product.thumb} />
			</div>

			<div className={styles.wrapContent}>
				<p className={styles.productTitle}>{product.name}</p>

				<div className={styles.wrapPriceRatings}>
					<RatingStar star={product.star} />

					<div className={styles.productWrapPrice}>
						<div className={styles.productPrice}>
							${product.price}
						</div>

						{product?.regular_price && (
							<div
								className={styles.productPriceDiscount}
								style={{
									color: "rgba(0, 0, 0, 0.4)",
									textDecoration: "line-through",
								}}
							>
								${product.regular_price}
							</div>
						)}

						{product?.regular_price && (
							<div className={styles.productPercentDiscount}>
								{100 - Math.round((product.sale_price / product.regular_price) * 100)}%
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;

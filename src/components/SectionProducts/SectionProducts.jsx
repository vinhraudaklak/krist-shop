import ProductCard from "../ProductCard/ProductCard";
import styles from "./SectionProducts.module.scss";


const SectionProducts = ({ title, products }) => {
	
	return (
			<div className={`${styles.wrapCategories} container`}>
				<div className={styles.wrapItemCategory}>
					<h1 className={styles.itemCategoryTitle}>{title}</h1>
					
					<div className={styles.containerProducts}>
						<div className={styles.wrapProducts}>
							{products.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
	
						<div className={styles.wrapBtn}>
							<button className={styles.btnViewMore}>View All</button>
						</div>
					</div>
				</div>
			</div>
	);
};

export default SectionProducts;

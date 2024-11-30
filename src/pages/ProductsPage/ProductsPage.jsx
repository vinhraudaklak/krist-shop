import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Filters from "../../components/Filters/Filters";
import ProductCard from "../../components/ProductCard/ProductCard";
import Layout from "../../components/Layout/Layout";
import styles from "./ProductsPage.module.scss";
import Separate from "../../components/Separate/Separate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getCategories, getProducts } from "../../utils/callApi.js";

const ProductsPage = () => {
	const [loading, setLoading] = useState(false);

	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);

	const [filters, setFilters] = useState({
		categories: [],
		prices: "",
		colors: [],
		sizes: [],
	});

	const [pagination, setPagination] = useState({
		totalPage: 0,
		currentPage: 1,
		perPage: 12,
	});

	// Fetch categories
	useEffect(() => {
		// ()()
		(async () => {
			try {
				const res = await getCategories();
				setCategories(res);
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);

	// Call API get products
	const handleGetProducts = async () => {
		setLoading(true);
		try {
			const res = await getProducts(
				filters,
				pagination.currentPage,
				pagination.perPage
			);

			const { products, total_pages, current_page } = res;

			setProducts(products);
			setPagination((prev) => ({
				...prev,
				totalPage: total_pages,
				currentPage: current_page,
			}));
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		handleGetProducts();
	}, [filters, pagination.currentPage, pagination.perPage]);

	// Handle pagination change
	const handlePageChange = (newPage) => {
		setPagination((prev) => ({
			...prev,
			currentPage: newPage,
		}));
	};

	console.log(pagination);

	return (
		<Layout>
			<Breadcrumbs />
			<div className={`${styles.productPage} container`}>
				<div className={styles.boxFilters}>
					<Filters
						filters={filters}
						setFilters={setFilters}
						categories={categories}
					/>
				</div>

				{/* Container products */}
				<div className={styles.boxProducts}>
					{/* ProductsTop */}
					<div className={styles.boxProductsTop}>
						<h2 className={styles.topTitle}>Casual</h2>
						<div className={styles.topSort}>
							<p className={styles.topSortLeft}>
								Showing 1-10 of 100 Products
							</p>
							<div className={styles.topSortRight}>
								<span>Sort by:</span>
								<select>
									<option value="">Most Popular</option>
								</select>
							</div>
						</div>
					</div>

					{/* ProductsCard Container */}
					<div className={styles.wrapBoxProductsCard}>
						<div className={styles.boxProductsCard}>
							{products.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
								/>
							))}
						</div>
					</div>

					{/* Product Bottom */}
					<div className={styles.boxProductsBottom}>
						<Separate />
						<div className={styles.wrapPagination}>
							<button
								className={styles.paginationArrow}
								onClick={() =>
									handlePageChange(pagination.currentPage - 1)
								}
								disabled={
									pagination.currentPage === 1 || loading
								}
							>
								<FontAwesomeIcon
									className={styles.iconArrow}
									icon={faArrowLeft}
								/>
								<p>Previous</p>
							</button>

							<div className={styles.wrapPageNumbers}>
								{Array.from(
									{ length: pagination.totalPage },
									(_, index) => (
										<button
											className={`${styles.boxNumber} ${styles.backgroundNumber} ${pagination.currentPage === index + 1 ? styles.active : ""}`}
											key={index + 1}
											onClick={() =>
												handlePageChange(index + 1)
											}
											disabled={loading}
										>
											{index + 1}
										</button>
									)
								)}
							</div>

							<button
								className={styles.paginationArrow}
								onClick={() =>
									handlePageChange(pagination.currentPage + 1)
								}
								disabled={
									pagination.currentPage ===
										pagination.totalPage || loading
								}
							>
								<p>Next</p>
								<FontAwesomeIcon icon={faArrowRight} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ProductsPage;

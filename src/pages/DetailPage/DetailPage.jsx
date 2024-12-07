import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

// import SectionProducts from "../../components/SectionProducts/SectionProducts";
import RatingStar from "../../components/RatingStar/RatingStar";
import SeparateMargin from "../../components/SeparateMargin/SeparateMargin";
import TruncateTextComponent from "../../components/TruncateTextComponent/TruncateTextComponent";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Layout from "../../components/Layout/Layout";
import styles from "./DetailPage.module.scss";
import { images } from "../../assets/images";
import { config } from "../../config/config";
import { getProductId } from "../../utils/callApi";
import SectionProducts from "../../components/SectionProducts/SectionProducts";

// const productAlsoLike = [
// 	{
// 		id: 1,
// 		thumb: images.product1,
// 		name: "Vertical Striped Shirt",
// 		regular_price: "232",
// 		price: "212",
// 		sale_price: "212",
// 		discount: "20%",
// 		star: 3.5,
// 	},
// 	{
// 		id: 2,
// 		thumb: images.product1,
// 		name: "Vertical Striped Shirt",
// 		regular_price: "232",
// 		price: "212",
// 		sale_price: "212",
// 		discount: "20%",
// 		star: 4.5,
// 	},
// 	{
// 		id: 3,
// 		thumb: images.product1,
// 		name: "Vertical Striped Shirt",
// 		regular_price: "232",
// 		price: "212",
// 		sale_price: "212",
// 		discount: "20%",
// 		star: 4,
// 	},
// 	{
// 		id: 4,
// 		thumb: images.product1,
// 		name: "Vertical Striped Shirt",
// 		regular_price: "232",
// 		price: "212",
// 		sale_price: "212",
// 		discount: "20%",
// 		star: 5,
// 	},
// ];
const DetailPage = () => {
	const [product, setProduct] = useState({});
	const [informationRatings, setInformationRatings] = useState([]);

	const [categories, setCategories] = useState([]);
	console.log(categories);
	
	const [relatedProducts, getRelatedProducts] = useState([]);

	const [showTopic, setShowTopic] = useState("ratings");

	const listImages = product?.images || [];
	const [indexImg, setIndexImg] = useState(0);

	const listColor = product?.attributes?.pa_color || [];
	const [checkedColor, setCheckedColor] = useState(0);

	const listSize = product?.attributes?.pa_size || [];
	const [checkedSize, setCheckedSize] = useState(0);

	// Call API productId.
	const { id } = useParams();
	useEffect(() => {
		(async () => {
			try {
				const res = await getProductId(id);
				setProduct(res);
				setCategories(res.categories);
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);

	// Call API rating product.
	useEffect(() => {
		(async () => {
			try {
				const res = await fetch(
					`${config.baseURL}/wp-json/letruongphat/v1/ratings/?id=${id}`
				);
				setInformationRatings(await res.json());
				if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
			} catch (error) {
				console.error("Fetch ratings error:", error);
			}
		})();
	}, []);

	// Call API brand category.
	useEffect(() => {
		(async () => {
			if (categories.length > 0) {
				try {
					const categoriesString = categories
						.map((itemCate) => `category[]=${itemCate.slug}`)
						.join("&");

					const res = await fetch(
						`${config.baseURL}/wp-json/letruongphat/v1/get-products/?${categoriesString}`
					);
					getRelatedProducts((await res.json()).products);
					if (!res.ok)
						throw new Error(
							`Failed to fetch category: ${res.status}`
						);
				} catch (error) {
					console.error("Fetch ratings error:", error);
				}
			}
		})();
	}, [categories]);

	return (
		<Layout>
			<Breadcrumbs nameProduct={product.name} />

			<div className="container">
				{/* Product detail */}
				<div className={styles.wrapDetail}>
					{/* ContainerImages */}
					<div className={styles.wrapImg}>
						<div className={styles.wrapImagesDetail}>
							{listImages.map((image, index) => (
								<div
									key={index}
									onClick={() => setIndexImg(index)}
								>
									<img
										style={
											indexImg === index
												? {
														border: "2px solid rgba(0, 0, 0, 1)",
													}
												: {}
										}
										src={image}
									/>
								</div>
							))}
						</div>

						<div className={styles.impImageMain}>
							<img src={listImages[indexImg]} />
						</div>
					</div>

					{/* Container Description */}
					<div className={styles.wrapDesc}>
						{/* Title */}
						<h2 className={styles.productTitle}>{product.name}</h2>

						{/* Rating Star */}
						<div className={styles.wrapRatings}>
							<RatingStar star={product.star} size="16" />
						</div>

						{/* Price Product */}
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
									-{" "}
									{100 -
										Math.round(
											(product.sale_price /
												product.regular_price) *
												100
										)}
									%
								</div>
							)}
							{/* <div className={styles.productPriceDiscount}>
								{product.price}
							</div>
							<div className={styles.productPrice}>
								{product.price}
							</div>
							<div className={styles.productPercentDiscount}>
								-20%
							</div> */}
						</div>

						{/* Description */}
						<p className={styles.productDesc}>
							{product.short_description}
						</p>

						<SeparateMargin />
						{/*  Select Color */}
						<div className={styles.productSelectColor}>
							<p className={styles.selectColorTitle}>
								Select Colors
							</p>
							<div className={styles.wrapColor}>
								{listColor.map((color, index) => (
									<div
										key={index}
										className={styles.colorItem}
										style={{
											backgroundColor: `${color}`,
										}}
										onClick={() => setCheckedColor(index)}
									>
										{checkedColor === index && (
											<img src={images.iconCheck} />
										)}
									</div>
								))}
							</div>
						</div>

						<SeparateMargin />
						{/* Select Size  */}
						<div className={styles.productSelectSize}>
							<p className={styles.selectSizeTitle}>
								Choose Size
							</p>
							<div className={styles.wrapSize}>
								{listSize.map((size, index) => (
									<div
										key={index}
										className={`${styles.sizeItem} ${checkedSize === index ? styles.active : ""}`}
										onClick={() => setCheckedSize(index)}
									>
										{size}
									</div>
								))}
							</div>
						</div>

						<SeparateMargin />
						{/* Add Cart  */}
						<div className={styles.productWrapAdd}>
							<div className={styles.productQuantity}>
								<div className={styles.btnReduce}>
									<img src={images.btnReduce} />
								</div>
								<span>1</span>
								<div className={styles.btnIncrease}>
									<img src={images.btnIncrease} />
								</div>
							</div>
							<button className={styles.btnAddCart}>
								Add to Cart
							</button>
						</div>
					</div>
				</div>

				{/* Container Detailes / Rating & Reviews */}
				<div className={styles.wrapperDetailsRatings}>
					<div className={styles.wrapLineTopic}>
						<div
							onClick={() => setShowTopic("ratings")}
							className={`${styles.topicItem} ${showTopic === "ratings" ? styles.active : ""}`}
						>
							Rating & Reviews
						</div>
						<div
							onClick={() => setShowTopic("details")}
							className={`${styles.topicItem} ${showTopic === "details" ? styles.active : ""}`}
						>
							Product Details
						</div>
					</div>

					{/* Container Details Product */}
					{showTopic === "ratings" ? (
						<div className={styles.containerRatings}>
							{/* topRatings */}
							<div className={styles.wrapTopRatings}>
								<div className={styles.allReviews}>
									All Reviews
									<span>
										(
										{informationRatings === "number"
											? informationRatings.length
											: 0}
										)
									</span>
								</div>

								<button className={styles.btnWriteRating}>
									write a Review
								</button>
							</div>

							{/* BottomRatings */}
							<div className={styles.wrapContainerRating}>
								{Array.isArray(informationRatings) &&
									informationRatings.map(
										(informationRating) => {
											return (
												<div
													key={informationRating.id}
													className={
														styles.wrapComment
													}
												>
													<RatingStar
														star={
															informationRating.rating
														}
													/>

													<div
														className={
															styles.userName
														}
													>
														<span>
															{
																informationRating.author
															}
															.
														</span>
														<FontAwesomeIcon
															className={
																styles.icon
															}
															icon={faCircleCheck}
														/>
													</div>

													<div>
														<TruncateTextComponent
															text={
																informationRating.content
															}
															maxLines={3}
															classNameText={
																styles.commentText
															}
															classNameBtnText={
																styles.btnText
															}
														/>
													</div>

													<div
														className={
															styles.timePosted
														}
													>
														<span>
															{
																informationRating.date
															}
														</span>
													</div>
												</div>
											);
										}
									)}
							</div>

							<div className={styles.wrapBtnLoadViews}>
								<button className={styles.btnLoadViews}>
									Load More Reviews
								</button>
							</div>
						</div>
					) : (
						<div className={styles.wrapDetailsProduct}>
							<h3 className={styles.titleNameProduct}>
								{product.name}
							</h3>
							<span className={styles.descriptionProduct}>
								<p>Detailes:</p>
								{product.description}
							</span>
							<SeparateMargin />
						</div>
					)}
				</div>

				<SectionProducts
					products={relatedProducts}
					title={"You might also like"}
				/>
			</div>
		</Layout>
	);
};

export default DetailPage;

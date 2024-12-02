import Layout from "../../components/Layout/Layout";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { images } from "../../assets/images";
import styles from "./DetailPage.module.scss";
import RatingStar from "../../components/RatingStar/RatingStar";
import SeparateMargin from "../../components/SeparateMargin/SeparateMargin";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleCheck,
	faStar,
	faStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import TruncateTextComponent from "../../components/TruncateTextComponent/TruncateTextComponent";

const product = {
	id: 1,
	image: images.product1,
	title: "Vertical Striped Shirt",
	price: "$232",
	priceDiscount: "$212",
	discount: "20%",
	star: 3.5,
	ratingTotal: "5.0",
	description:
		"This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
};

const informationComments = [
	{
		id: 1,
		name: "Sarah M.",
		comment:
			'"I"m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I"ve bought has quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I"ve bought has quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I"ve bought hasexceeded my expectations.”',
		star: 5,
	},
	{
		id: 2,
		name: "Alex K.",
		comment:
			'"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It"s evident that the designer poured their creativity into making this t-shirt stand out."',
		star: 4.5,
	},
	{
		id: 3,
		name: "James L.",
		comment:
			"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
		star: 4,
	},
	{
		id: 4,
		name: "VinhNg.",
		comment:
			'"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It"s become my favorite go-to shirt."',
		star: 5,
	},
	{
		id: 5,
		name: "Sarah M.",
		comment:
			'"I"m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I"ve bought has exceeded my expectations.”',
		star: 5,
	},
	{
		id: 6,
		name: "Alex K.",
		comment:
			'"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
		star: 4.5,
	},
	{
		id: 7,
		name: "James L.",
		comment:
			"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
		star: 8,
	},
	{
		id: 9,
		name: "VinhNg.",
		comment:
			'"I"m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I"ve bought has exceeded my expectations.”',
		star: 5,
	},
];
const DetailPage = () => {
	const [showTopic, setShowTopic] = useState("ratings");
	const commentRefs = useRef([]);

	useEffect(() => {
		informationComments.forEach((_, index) => {
			const element = commentRefs.current[index];

			if (element && element.scrollHeight > element.clientHeight) {
				const btnViewMore =
					element.parentNode.querySelector(".viewMore");
				btnViewMore.style.display = "block";
			}
		});
	}, []);

	return (
		<Layout>
			<Breadcrumbs />
			<div className="container">
				{/* Product detail */}
				<div className={styles.wrapDetail}>
					{/* ContainerImages */}
					<div className={styles.wrapImg}>
						<div className={styles.wrapImagesDetail}>
							<div>
								<img src={product.image} />
							</div>
							<div>
								<img src={product.image} />
							</div>
							<div>
								<img src={product.image} />
							</div>
						</div>

						<div className={styles.impImageMain}>
							<img src={product.image} />
						</div>
					</div>
					{/* Container Description */}
					<div className={styles.wrapDesc}>
						{/* Title */}
						<h2 className={styles.productTitle}>{product.title}</h2>
						{/* Rating Star */}
						<RatingStar star={product.star} size="16" />
						{/* Price Profuct */}
						<div className={styles.productWrapPrice}>
							<div className={styles.productPriceDiscount}>
								{product.priceDiscount}
							</div>
							<div className={styles.productPrice}>
								{product.price}
							</div>
							<div className={styles.productPercentDiscount}>
								-20%
							</div>
						</div>
						{/* Description */}
						<p className={styles.productDesc}>
							{product.description}
						</p>
						<SeparateMargin />
						{/*  Select Color */}
						<div className={styles.productSelectColor}>
							<p className={styles.selectColorTitle}>
								Select Colors
							</p>
							<div className={styles.wrapColor}>
								<div
									className={styles.colorItem}
									style={{
										backgroundColor: "rgba(79, 70, 49, 1)",
									}}
								>
									<img src={images.iconCheck} />
								</div>
								<div
									className={styles.colorItem}
									style={{
										backgroundColor: "rgba(49, 79, 74, 1)",
									}}
								></div>
								<div
									className={styles.colorItem}
									style={{
										backgroundColor: "rgba(49, 52, 79, 1)",
									}}
								></div>
							</div>
						</div>
						<SeparateMargin />
						{/* Select Size  */}
						<div className={styles.productSelectSize}>
							<p className={styles.selectSizeTitle}>
								Choose Size
							</p>
							<div className={styles.wrapSize}>
								<div
									className={`${styles.sizeItem} ${styles.active}`}
								>
									Small
								</div>
								<div className={styles.sizeItem}>Medium</div>
								<div className={styles.sizeItem}>Large</div>
								<div className={styles.sizeItem}>X-Large</div>
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
									<span>({informationComments.length})</span>
								</div>

								<button className={styles.btnWriteRating}>
									write a Review
								</button>
							</div>
							{/* BottomRatings */}
							<div className={styles.wrapContainerRating}>
								{informationComments.map(
									(informationComment) => {
										// check star int of float
										const isInt =
											informationComment.star &&
											(informationComment.star / 2) %
												0.5 ===
												0;

										// Convert star number to array
										// 5 => [0, 1 , 2, 3,]
										const numberToArr = Array.from(
											{ length: informationComment.star },
											(_, index) => index + 1
										);

										return (
											<div
												key={informationComment.id}
												className={styles.wrapComment}
											>
												<div>
													<div
														className={
															styles.starRating
														}
													>
														{numberToArr.map(
															(_, index) => {
																return (
																	<FontAwesomeIcon
																		key={index}
																		icon={
																			faStar
																		}
																	/>
																);
															}
														)}
	
														{!isInt && (
															<FontAwesomeIcon
																icon={faStarHalf}
															/>
														)}
													</div>
													<div
														className={styles.userName}
													>
														<span>
															{
																informationComment.name
															}
														</span>
														<FontAwesomeIcon
															className={styles.icon}
															icon={faCircleCheck}
														/>
													</div>
													<div>
														<TruncateTextComponent
															text={
																informationComment.comment
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
												</div>

												<span
													className={
														styles.timePosted
													}
												>
													Posted on August 18, 2023
												</span>
											</div>
										);
									}
								)}
							</div>
						</div>
					) : (
						<div className={styles.wrapDetailsProduct}>
							<h1 className={styles.titleName}>Vertical Striped Shirt</h1>
						</div>
					)}
				</div>
			</div>
		</Layout>
	);
};

export default DetailPage;

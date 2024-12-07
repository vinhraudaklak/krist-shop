import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRight,
	faPenToSquare,
	faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./CartPage.module.scss";
import { images } from "../../assets/images";
import Layout from "../../components/Layout/Layout";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import SeparateMargin from "../../components/SeparateMargin/SeparateMargin";
import Separate from "../../components/Separate/Separate";
const CartPage = () => {
	return (
		<Layout>
			<Breadcrumbs />
			<div className={`${styles.wrapper} container`}>
				<h1 className={styles.title}>Your cart</h1>

				<div className={styles.wrapCart}>
					{/* List cart product */}
					<div className={styles.wrapCartProducts}>
						<div className={styles.containerCartProducts}>
							<div className={styles.wrapCartItem}>
								<div className={styles.imageItem}>
									<img src={images.product1} />
								</div>
								{/* Info item */}
								<div className={styles.wrapInfoItem}>
									<div className={styles.wrapInfo}>
										<div className={styles.infoContent}>
											<h3>Gradient Graphic T-shirt</h3>
											<p>
												Size: <span>Large</span>
											</p>
											<p>
												Color: <span>White</span>
											</p>
										</div>

										<div className={styles.priceItem}>
											$145
										</div>
									</div>

									<div className={styles.wrapFeature}>
										<div className={styles.clearIcon}>
											<FontAwesomeIcon
												icon={faTrashCan}
											/>
										</div>

										<div className={styles.wrapBtn}>
											<button>
												<img src={images.btnReduce} />
											</button>
											<span>1</span>
											<button>
												<img src={images.btnIncrease} />
											</button>
										</div>
									</div>
								</div>
							</div>

							{/* Nếu lọc => thêm DK index < items.length - 1 && <div className="separator">New Element</div> */}
							<SeparateMargin />
							<div className={styles.wrapCartItem}>
								<div className={styles.imageItem}>
									<img src={images.product1} />
								</div>
								{/* Info item */}
								<div className={styles.wrapInfoItem}>
									<div className={styles.wrapInfo}>
										<div className={styles.infoContent}>
											<h3>Gradient Graphic T-shirt</h3>
											<p>
												Size: <span>Large</span>
											</p>
											<p>
												Color: <span>White</span>
											</p>
										</div>

										<div className={styles.priceItem}>
											$145
										</div>
									</div>

									<div className={styles.wrapFeature}>
										<div className={styles.clearIcon}>
											<FontAwesomeIcon
												icon={faTrashCan}
											/>
										</div>

										<div className={styles.wrapBtn}>
											<button>
												<img src={images.btnReduce} />
											</button>
											<span>1</span>
											<button>
												<img src={images.btnIncrease} />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Result oder */}
					<div className={styles.wrapOderSummary}>
						<div className={styles.containerOderSummary}>
							<h3 className={styles.titleOder}>Order Summary</h3>
							{/* Calculate */}
							<div className={styles.wrapCalculate}>
								<div
									className={`${styles.subTotal} ${styles.calculateItem}`}
								>
									<p>Subtotal</p>
									<span>$565</span>
								</div>
								<div
									className={`${styles.Discount} ${styles.calculateItem}`}
								>
									<p>Discount (-20%)</p>
									<span className={styles.DiscountPrice}>
										-$113
									</span>
								</div>
								<div
									className={`${styles.Delivery} ${styles.calculateItem}`}
								>
									<p>Delivery Fee</p>
									<span>$15</span>
								</div>
								<div>
									<Separate />
								</div>
								<div
									className={`${styles.total} ${styles.calculateItem}`}
								>
									<p>Total</p>
									<span>$467</span>
								</div>
							</div>
							{/* add promo code */}
							<div className={styles.wrapAddCode}>
								<div className={styles.wrapInput}>
									<FontAwesomeIcon
										icon={faPenToSquare}
										className={styles.iconWrite}
									/>
									<input placeholder="Add promo code" />
								</div>

								<button>Apply</button>
							</div>
							{/* btn */}
							<button className={styles.checkoutBtn}>
								<span>Go to Checkout</span>
								<FontAwesomeIcon
									icon={faArrowRight}
									className={styles.rightIcon}
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default CartPage;

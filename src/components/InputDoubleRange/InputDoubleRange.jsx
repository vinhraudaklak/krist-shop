import { useEffect, useState } from "react";
import styles from "./InputDoubleRange.module.scss";
import { PRICE_RANGE } from "../../const/const";

// eslint-disable-next-line react/prop-types
const InputDoubleRange = ({ toggleFilter }) => {
	const [priceRange, setPriceRange] = useState({
		minPrice: PRICE_RANGE.MIN_PRICE,
		maxPrice: PRICE_RANGE.MAX_PRICE,
	});

	useEffect(() => {
		toggleFilter('prices', `${priceRange.minPrice},${priceRange.maxPrice}`);
	}, [priceRange])

	// Hàm xử lý thay đổi giá trị
	const handlePriceChange = (e) => {
		const value = +e.target.value;
		const sliderName = e.target.name;

		setPriceRange((prevRange) => {
			if (sliderName === "minPrice" && value < prevRange.maxPrice) {
				return { ...prevRange, minPrice: value };
			}
			if (sliderName === "maxPrice" && value > prevRange.minPrice) {
				return { ...prevRange, maxPrice: value };
			}
			return prevRange; // Không thay đổi nếu không hợp lệ
		});
	};

	return (
		<>
			<div className={styles.rangeSlide}>
				<div className={styles.slide}>
					{/* Thanh màu hiển thị khoảng giá */}
					<div
						className={styles.line}
						style={{
							left: `${(priceRange.minPrice / PRICE_RANGE.MAX_PRICE) * 100}%`,
							right: `${100 - (priceRange.maxPrice / PRICE_RANGE.MAX_PRICE) * 100}%`,
						}}
					/>
					{/* Nút kéo tối thiểu */}
					<span
						className={styles.thumb}
						style={{
							left: `${(priceRange.minPrice / PRICE_RANGE.MAX_PRICE) * 100}%`,
						}}
					/>
					{/* Nút kéo tối đa */}
					<span
						className={styles.thumb}
						style={{
							left: `${(priceRange.maxPrice / PRICE_RANGE.MAX_PRICE) * 100}%`,
						}}
					/>
				</div>

				{/* Thanh trượt tối thiểu */}
				<input
					type="range"
					name="minPrice"
					min={PRICE_RANGE.MIN_PRICE}
					max={PRICE_RANGE.MAX_PRICE}
					step={10}
					value={priceRange.minPrice}
					onChange={handlePriceChange}
				/>

				{/* Thanh trượt tối đa */}
				<input
					type="range"
					name="maxPrice"
					min={PRICE_RANGE.MIN_PRICE}
					max={PRICE_RANGE.MAX_PRICE}
					step={10}
					value={priceRange.maxPrice}
					onChange={handlePriceChange}
				/>

				{/* Hiển thị giá trị */}
			</div>
			<div className={styles.priceRanges}>
				<span>
					Price range: {priceRange.minPrice}$ - {priceRange.maxPrice}$
				</span>
			</div>
		</>
	);
};

export default InputDoubleRange;

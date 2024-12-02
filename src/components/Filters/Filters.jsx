import { useCallback, useState } from "react";
import SeparateMargin from "../SeparateMargin/SeparateMargin";
import styles from "./Filters.module.scss";
import { images } from "../../assets/images";
import InputDoubleRange from "../InputDoubleRange/InputDoubleRange";
import { LIST_COLORS, LIST_SIZES } from "../../const/const";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faFilter } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const Filters = ({ filters, setFilters, categories }) => {
	const [ showFilterBrands, setShowFilterBrands ] = useState(true)

	// Handle change filter options
	const toggleFilter = useCallback((filterName, option) => {
		setFilters((prev) => {
			if (filterName !== "prices") {
				return {
					...prev,
					[filterName]: prev[filterName].includes(option) // check xem category đã tồn tại trong filters chưa
						? prev[filterName].filter((item) => item !== option) // nếu tồn tại thì lặp qua mảng filter.categories và loại bỏ category đã tồn tại trước đó
						: [...prev[filterName], option], // nếu không tồn tại thì lấy lại categories đã thêm trước đó và thêm mới category hiện tại vào filters
				};
			} else {
				return {
					...prev,
					[filterName]: option,
				};
			}
		});
	}, []);

	return (
		<div className={styles.wrapFilters}>
			<div className={styles.boxTitle}>
				<h3 className={styles.titleFilter}>Filters</h3>
				<div className={styles.iconFilter}>
					<FontAwesomeIcon icon={faFilter} />
				</div>
			</div>

			<SeparateMargin />
			{/* filersCategory */}
			<div className={styles.containerFilterBrands}>
				<div className={styles.wrapBradsTop}>
					<h3 className={styles.titleFilterBrands}>Fashion Brand</h3>
					
					<div className={styles.iconArrow}
						onClick={() => setShowFilterBrands(!showFilterBrands)}
					>
							{ showFilterBrands ? 	
								<FontAwesomeIcon icon={faChevronUp} /> :
								<FontAwesomeIcon icon={faChevronDown} /> 
							}
					</div>
				</div>

				{ showFilterBrands && (<ul className={styles.boxFilterCategory}>
					{categories.map((category) => (
						<li
							onClick={() => toggleFilter("categories", category)}
							key={category.slug}
							style={{
								cursor: "pointer",
							}}
							className={`${styles.category} ${
								filters.categories.includes(category)
									? styles.catActive
									: ""
							}`}
							
						>
							{category.name}
						</li>
					))}
				</ul>)}
			</div>

			<SeparateMargin />
			{/* filterPrices */}
			<div className={styles.boxTitle}>
				<h3 className={styles.titleFilter}>Price</h3>
			</div>
			<InputDoubleRange filters={filters} toggleFilter={toggleFilter} />

			<SeparateMargin />
			{/* filter color */}
			<div className={styles.boxTitle}>
				<h3 className={styles.titleFilter}>Colors</h3>
			</div>
			<div className={styles.boxFilterColors}>
				{LIST_COLORS.map((colorItem) => (
					<div
						className={styles.colorItem}
						key={colorItem.id}
						style={{ backgroundColor: `${colorItem.color}` }}
						onClick={() => toggleFilter("colors", colorItem)}
					>
						{filters.colors.includes(colorItem) && (
							<img
								src={images.iconCheck}
								style={{ margin: "auto" }}
							/>
						)}
					</div>
				))}
			</div>

			<SeparateMargin />
			{/* filter size */}
			<div className={styles.boxTitle}>
				<h3 className={styles.titleFilter}>Size</h3>
			</div>
			<div className={styles.boxFilterSizes}>
				{LIST_SIZES.map((sizeItem) => (
					<div
						key={sizeItem.id}
						className={styles.sizeItem}
						onClick={() => toggleFilter("sizes", sizeItem)}
						style={{
							background: filters.sizes.includes(sizeItem)
								? "#000"
								: "",
							color: filters.sizes.includes(sizeItem)
								? "rgba(255, 255, 255, 1)"
								: "",
						}}
					>
						{sizeItem.size}
					</div>
				))}
			</div>

			{/* Btn apply Filter */}
			{/* <button className={styles.btnApplyFilter}>Apply Filter</button> */}
		</div>
	);
};

export default Filters;

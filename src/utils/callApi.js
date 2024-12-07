import { config } from "../config/config";

// Get ID product of API.
export const getProductId = async (id) => {
	const res = await fetch(
		`${config.baseURL}/wp-json/letruongphat/v1/product/?id=${id}`
	);

	if (!res.ok) throw new Error("failed to fetch productId");
	return await res.json();
};

// Get all category of API.
export const getCategories = async () => {
	const res = await fetch(
		`${config.baseURL}/wp-json/letruongphat/v1/categories`
	);
	if (!res.ok) throw new Error("Failed to fetch categories");

	return await res.json();
};

// Get products and filters.
export const getProducts = async (filters, currentPage = 1, perPage = 12) => {
	// ...rest data of filters.
	const { categories, prices, colors, sizes } = filters;

	// Chuyển categories thành đuôi gọi API.
	const categoriesString = categories
		.map((itemCate) => `category[]=${itemCate.slug}`)
		.join("&");

	// Chuyển đổi prices thành đuôi API.
	const pricesString = `&price=${prices}`;

	// Chuyển đổi colors thành đuôi API.
	const colorsString = colors
		.map((itemCol) => `color[]=${itemCol.color}`)
		.join("&");

	// chuyển đổ sizes thành đuôi API.
	const sizesString = sizes
		.map((itemSize) => `size[]=${itemSize.size}`)
		.join("&");

	// Chuyển pagination thành đuôi API.
	const paginationString = `&page=${currentPage}&per_page=${perPage}`;

	// Get products từ API.
	const res = await fetch(
		`${config.baseURL}/wp-json/letruongphat/v1/get-products/?${categoriesString}${colorsString}${sizesString}${pricesString}${paginationString}`
	);

	return await res.json();
};

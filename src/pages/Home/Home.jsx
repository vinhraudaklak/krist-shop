import Layout from "../../components/Layout/Layout";
import BrandList from "../../components/BrandList/BrandList";
import { images } from "../../assets/images";
import SectionProducts from "../../components/SectionProducts/SectionProducts";
import SectionStyles from "../../components/SectionStyles/SectionStyles";
import SectionFeedback from "../../components/SectionFeedback/SectionFeedback";
import Separate from "../../components/Separate/Separate";

const newArrProducts = [
	{
		id: 1,
		thumb: images.product1,
		name: "Vertical Striped Shirt",
		regular_price: "232",
		price: "212",
		sale_price: "212",
		discount: "20%",
		star: 3.5,
	},
	{
		id: 2,
		thumb: images.product1,
		name: "Vertical Striped Shirt",
		regular_price: "232",
		price: "212",
		sale_price: "212",
		discount: "20%",
		star: 4.5,
	},
	{
		id: 3,
		thumb: images.product1,
		name: "Vertical Striped Shirt",
		regular_price: "232",
		price: "212",
		sale_price: "212",
		discount: "20%",
		star: 4,
	},
	{
		id: 4,
		thumb: images.product1,
		name: "Vertical Striped Shirt",
		regular_price: "232",
		price: "212",
		sale_price: "212",
		discount: "20%",
		star: 5,
	},
];

const topSellProducts = [
	{
		id: 1,
		thumb: images.product1,
		name: "Vertical Striped Shirt",
		regular_price: "232",
		price: "212",
		sale_price: "212",
		discount: "20%",
		star: 3.5,
	},
	{
		id: 2,
		thumb: images.product1,
		name: "Vertical Striped Shirt",
		regular_price: "232",
		price: "212",
		sale_price: "212",
		discount: "20%",
		star: 4.5,
	},
	{
		id: 3,
		thumb: images.product1,
		name: "Vertical Striped Shirt",
		regular_price: "232",
		price: "212",
		sale_price: "212",
		discount: "20%",
		star: 4,
	},
	{
		id: 4,
		thumb: images.product1,
		name: "Vertical Striped Shirt",
		regular_price: "232",
		price: "212",
		sale_price: "212",
		discount: "20%",
		star: 5,
	},
];

const informationComments = [
	{
		id: 1,
		name: "Sarah M.",
		comment:
			'"I"m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I"ve bought has exceeded my expectations.”',
		star: 0.5,
	},
	{
		id: 2,
		name: "Alex K.",
		comment:
			'"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
		star: 3.5,
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
			'"I"m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I"ve bought has exceeded my expectations.”',
	},
];

function Home() {
	return (
		<Layout>
			<BrandList />
			<SectionProducts title="NEW ARRIVALS" products={newArrProducts} />
			<Separate />
			<SectionProducts title="TOP SELLING" products={topSellProducts} />
			<SectionStyles />
			<SectionFeedback informationComments={informationComments} />
		</Layout>
	);
}

export default Home;

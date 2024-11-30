import { useEffect, useRef, useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Banner from "../Banner/Banner";
import BannerContact from "../../components/BannerContact/BannerContact";
import { useLocation } from "react-router-dom";
import "./Layout.module.scss";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
	const headerRef = useRef(null);
	const { pathname } = useLocation();

	const [headerHeight, setHeaderHeight] = useState(null);

	useEffect(() => {
		if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
	}, []);

	return (
		<div>
			<Header headerRef={headerRef} headerHeight={headerHeight} />
			{pathname === "/" && 
				<Banner headerHeight={headerHeight} 
			/>}
			{children}
			<BannerContact />
			<Footer />
		</div>
	);
};

export default Layout;

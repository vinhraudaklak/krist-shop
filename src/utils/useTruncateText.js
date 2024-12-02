import { useState, useRef, useEffect } from "react";

export const useTruncateText = (text, maxLines) => {
	const [isTruncated, setIsTruncated] = useState(false);
	const [showMore, setShowMore] = useState(false);
	const textRef = useRef(null);
	

	useEffect(() => {
		if (textRef.current) {
      // parseFloat covert string sang number.
      // lineHeight just take on window.
			const lineHeight = parseFloat(
				window.getComputedStyle(textRef.current).lineHeight || "0"
			);
      // total all numbers line.
			const maxHeight = lineHeight * maxLines;
      // compare heightScrollHeight with maxHeight.
			if (textRef.current.scrollHeight > maxHeight) 
        setIsTruncated(true);
		}
	}, [text, maxLines]);

	const toggleShowMore = () => setShowMore(!showMore);

	return { textRef, isTruncated, showMore, toggleShowMore };
};

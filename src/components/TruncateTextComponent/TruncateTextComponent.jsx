import { useTruncateText } from "../../utils/useTruncateText";

// eslint-disable-next-line react/prop-types
const TruncateTextComponent = ({ text, maxLines, classNameText, classNameBtnText }) => {
	const { textRef, isTruncated, showMore, toggleShowMore } = useTruncateText(
		text,
		maxLines
	);
	
  
	return (
		<>
			<div
				ref={textRef}
				style={{
					overflow: "hidden",
					display: "-webkit-box",
					WebkitBoxOrient: "vertical",
					WebkitLineClamp: showMore ? undefined : maxLines,
				}}
				className={classNameText}
			>
				{text}
			</div>
			{isTruncated && (
				<button 
          onClick={toggleShowMore}
          className={classNameBtnText}
        >
					{showMore ? "Hidden" : "View More"}
				</button>
			)}
		</>
	);
};

export default TruncateTextComponent;

/* eslint no-undef: 0 */ // --> OFF

const SuccessBanner = (({sMsg}) => {
	return (
		<div className="success-banner">
			<p style={{fontWeight: 'bold'}}>{sMsg}</p>
		</div>
	);
});

export default SuccessBanner;
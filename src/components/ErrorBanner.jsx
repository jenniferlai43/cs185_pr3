/* eslint no-undef: 0 */ // --> OFF

const ErrorBanner = (({errors}) => {
	//0 => issue with title
	//1 => issue with zoom link
	//2 => issue with date
	var errorDict = [
		{
			id: 0,
			msg: 'Title must be between 1-30 characters long.'
		},
		{
			id: 1,
			msg: "Link must contains keywords 'http' and 'zoom'."
		},
		{
			id: 2,
			msg: 'Datetime must be greater than current time.'
		}
	]
	console.log(errors);

	return (
		<div className="error-banner">
			<p style={{textDecoration: 'underline', fontWeight: 'bold'}}>Please fix the following error(s):</p>
			<ul className="errors">
				{errors.map((e) => 
					<li key={e.id}>{errorDict[e].msg}</li>
				)}
			</ul>
		</div>
	);
});

export default ErrorBanner;
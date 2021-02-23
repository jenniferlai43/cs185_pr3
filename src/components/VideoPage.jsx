/* eslint no-undef: 0 */ // --> OFF
import React from 'react';

class VideoPage extends React.Component {

	handleClick = (e) => {
		e.preventDefault();
		const modal = document.querySelector('.modal');
		const modalVid = document.querySelector('.overlay-vid');

		modalVid.innerHTML = "";
		var source = document.createElement('source');
		let src = process.env.PUBLIC_URL + '/videos/' + e.target.getAttribute('data-src');
		source.src = src;
		console.log(source);
		source.type = 'video/mp4';
	    modalVid.appendChild(source);
	    modalVid.load();
	    console.log(modalVid);
	    modal.style.display = "flex";
	}

	handleModalClick = (e) => {
		const modal = document.querySelector('.modal');
		modal.style.display = "none";
	}

	render() {
		const publicSrc = process.env.PUBLIC_URL + '/videos/'

	    return (
	      <div>
	      	<div id='imgModal' className='modal' onClick={this.handleModalClick}>
			  	<video className='overlay-vid' id='overlay-vid' width='560' height='315' controls></video>
			</div>
			<div className='vgallery'>
				<video data-src='1.mp4' className='evid' width='560' height='315' controls onClick={this.handleClick}>
					<source src={`${publicSrc}1.mp4`} type='video/mp4' />
				</video>
				<video data-src='2.mp4' className='evid' width='560' height='315' controls onClick={this.handleClick}>
					<source src={`${publicSrc}2.mp4`} type='video/mp4' />
				</video>
				<video data-src='3.mp4' className='evid' width='560' height='315' controls onClick={this.handleClick}>
					<source src={`${publicSrc}3.mp4`} type='video/mp4' />
				</video>
				<video data-src='4.mp4' className='evid' width='560' height='315' controls onClick={this.handleClick}>
					<source src={`${publicSrc}4.mp4`} type='video/mp4' />
				</video>
			</div>
	      </div>
	    );
	}
}

export default VideoPage;
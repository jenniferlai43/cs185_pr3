/* eslint no-undef: 0 */ // --> OFF
import React from 'react';

class ImagePage extends React.Component {

	handleClick = (e) => {
		const modal = document.querySelector('.modal');
		const modalImg = document.querySelector('.overlay-img');
		console.log(e.target);
		let src = process.env.PUBLIC_URL + '/images/' + e.target.getAttribute('data-src');;
		modalImg.src = src;
		modal.style.display = 'flex';
	}

	handleModalClick = (e) => {
		const modal = document.querySelector('.modal');
		modal.style.display = "none";
	}

	render() {
		const publicUrl = process.env.PUBLIC_URL + '/images';
	    return (
	      <div>
	      	<div id='imgModal' className='modal' onClick={this.handleModalClick}>
	  			<img className='overlay-img' id='overlay-img'/>
			</div>
			<div className='igallery'>
				<div className='img-wrap'>
					<p>Attack On Titan</p>
					<img alt='aot' src={`${publicUrl}/aot.jpg`} data-src='aot.jpg' onClick={this.handleClick}/>
				</div>
				<div className='img-wrap'>
					<p>Fullmetal Alchemist Brotherhood</p>
					<img alt='fmab' src={`${publicUrl}/fmab.jpg`} data-src='fmab.jpg' onClick={this.handleClick}/>
				</div>
				<div className='img-wrap'>
					<p>Horimiya</p>
					<img alt='hori' src={`${publicUrl}/hori.png`} data-src='hori.png' onClick={this.handleClick}/>
				</div>
				<div className='img-wrap'>
					<p>Jujutsu Kaisen</p>
					<img alt='jjk' src={`${publicUrl}/jjk.jpg`} data-src='jjk.jpg' onClick={this.handleClick}/>
				</div>
				<div className='img-wrap'>
					<p>Oregairu</p>
					<img alt='snafu' src={`${publicUrl}/snafu.jpg`} data-src='snafu.jpg' onClick={this.handleClick}/>
				</div>
				<div className='img-wrap'>
					<p>The Promised Neverland</p>
					<img alt='tpn' src={`${publicUrl}/tpn.jpg`} data-src='tpn.jpg' onClick={this.handleClick}/>
				</div>
				<div className='img-wrap'>
					<p>Burn The Witch</p>
					<img alt='btw' src={`${publicUrl}/btw.jpg`} data-src='btw.jpg' onClick={this.handleClick}/>
				</div>
				<div className='img-wrap'>
					<p>My Little Monster</p>
					<img alt='mlm' src={`${publicUrl}/mlm.jpg`} data-src='mlm.jpg' onClick={this.handleClick}/>
				</div>
			</div>
	      </div>
	    );
	}
}

export default ImagePage;
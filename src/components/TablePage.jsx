/* eslint no-undef: 0 */ // --> OFF
import React from 'react';

class TablePage extends React.Component {

	render() {
	    return (
	      <div>
	      	<table>
			  	<tr>
					<th>Project Name</th>
			    	<th>Details</th>
			  	</tr>
			  	<tr>
			    	<td><a target="_blank" href="https://github.com/scalableinternetservices/RoyalTundraWolfpack">Boe's Beautiful Books</a></td>
			    	<td>Built and load tested scalable web application for online book discussion club that handles up to 512 users/sec.</td>
			  	</tr>
			  	<tr>
			    	<td><a target="_blank" href="https://github.com/jenniferlai43/rapscorer">Rap Scorer</a></td>
			    	<td>Developed a multiplayer web game where 2 users anywhere in the world can connect with one another in a room, see their rhymes transcribed, and get scored on the quality of their rap.</td>
			  	</tr>
			  	<tr>
			    	<td><a target="_blank" href="https://jayleenli.github.io/HackSC2019/">Mineyeeter</a></td>
			    	<td>Web VR twist on a classic game - Minesweeper - by combining physicality of VR along with a  multiplayer aspect.</td>
			  	</tr>
			</table>
	      </div>
	    );
	}
}

export default TablePage;
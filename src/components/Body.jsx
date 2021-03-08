/* eslint no-undef: 0 */ // --> OFF
import React from 'react';
import TextPage from './TextPage';
import ImagePage from './ImagePage';
import VideoPage from './VideoPage';
import TablePage from './TablePage';
import EmailPage from './EmailPage';
import ZoomManagerPage from './ZoomManagerPage';

class Body extends React.Component {
  displayTab = (id) => {
    if (id === 0) {
      return <TextPage />
    } else if (id === 1) {
      return <ImagePage />
    } else if (id === 2) {
      return <VideoPage />
    } else if (id === 3) {
      return <TablePage />
    } else if (id === 4) {
      return <EmailPage />
    } else {
      return <ZoomManagerPage />
    }
  }

  render() {
    const activeId = this.props.active;
    const tabInfo = this.props.tabs[activeId];

    return (
      <div>
      	<h1>Jennifer's {tabInfo.title} Page</h1>
        <h3>{tabInfo.caption}</h3>
        {this.displayTab(activeId)}
      </div>
    );
  }

}

export default Body;
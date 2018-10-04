import React, { Component } from 'react';
import styled from 'styled-components';
import Newsletter from './Newsletter';
import RecentPost from './RecentPosts';
import Social from './Social';

const SidebarContainer = styled('aside')``;

class Sidebar extends Component {
  render() {
    const { recentPosts } = this.props;
    return (
      <SidebarContainer>
        <Newsletter />
        <Social />
        {recentPosts && <RecentPost posts={recentPosts} />}
      </SidebarContainer>
    );
  }
}

export default Sidebar;

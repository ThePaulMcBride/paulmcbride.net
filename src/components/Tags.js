import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const TagsContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 16px;
`

const Tag = styled(Link)`
  display: inline-block;
  padding: 4px 16px;
  margin: 0 8px 4px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #78909C;
  border-radius: 3px;
  background-color: #F9FAFB;
  transition: 500ms;
`

export default function Tags({ list = [] }) {
  return (
    <TagsContainer>
      {list.map(tag => <Tag key={tag} to={`/tags/${tag}`}>{tag}</Tag>)}
    </TagsContainer>
  );
}

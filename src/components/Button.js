import styled from 'styled-components';

export default styled('button')`
  display: inline-block;
  padding: 8px 32px;
  cursor: pointer;
  transition: 500ms;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  line-height: inherit;
  border: 0;
  color: #ffffff;
  white-space: initial;
  background-color: #1f5f8b;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Montserrat',sans-serif;
  font-weight: 700;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
`;

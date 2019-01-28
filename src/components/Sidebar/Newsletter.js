import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { ItemTitle, ItemWrapper } from './SharedComponents';

const EmailInput = styled('input')`
  width: 100%;
  padding: 16px;
  border: 1px solid #ecf0f1;
  border-radius: 0;
  line-height: initial;
  background-color: #ffffff;
  font-size: 16px;
  transition: 500ms;
  margin-bottom: 16px;

  &:hover,
  &:active,
  &:focus {
    border: 1px solid #78909c;
  }
`;

const Form = styled('form')`
  margin-bottom: 0;
`;

class Newsletter extends Component {
  render() {
    return (
      <ItemWrapper>
        <ItemTitle>Newsletter</ItemTitle>
        <Form
          action="https://buttondown.email/api/emails/embed-subscribe/thepaulmcbride"
          method="post"
          target="popupwindow"
          onSubmit={() =>
            window.open(
              'https://buttondown.email/thepaulmcbride',
              'popupwindow'
            )
          }
        >
          <EmailInput
            type="email"
            name="email"
            id="bd-email"
            placeholder="Email Address"
            aria-label="Email Address"
            required
          />
          <input type="hidden" value="1" name="embed" />
          <Button fullWidth>Subscribe</Button>
        </Form>
      </ItemWrapper>
    );
  }
}

export default Newsletter;

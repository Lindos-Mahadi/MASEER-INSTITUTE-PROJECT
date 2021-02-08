import React from 'react';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

const SocialButtonsPage = () => {
  return (
    <MDBContainer>
      <MDBBtn size="lg" social="fb">
        <MDBIcon fab icon="facebook-f" />
      </MDBBtn>
      <MDBBtn size="lg" social="tw">
        <MDBIcon fab icon="twitter" />
      </MDBBtn>
      <MDBBtn size="lg" social="gplus">
        <MDBIcon fab icon="google-plus-g" />
      </MDBBtn>
      <MDBBtn size="lg" social="li">
        <MDBIcon fab icon="linkedin-in" />
      </MDBBtn>
      <MDBBtn size="lg" social="ins">
        <MDBIcon fab icon="instagram" />
      </MDBBtn>
      <MDBBtn size="lg" social="pin">
        <MDBIcon fab icon="pinterest" />
      </MDBBtn>
      <MDBBtn size="lg" social="yt">
        <MDBIcon fab icon="youtube" />
      </MDBBtn>
      <MDBBtn size="lg" social="vk">
        <MDBIcon fab icon="vk" />
      </MDBBtn>
      <MDBBtn size="lg" social="so">
        <MDBIcon fab icon="stack-overflow" />
      </MDBBtn>
      <MDBBtn size="lg" social="slack">
        <MDBIcon fab icon="slack" />
      </MDBBtn>
      <MDBBtn size="lg" social="git">
        <MDBIcon fab icon="github" />
      </MDBBtn>
      <MDBBtn size="lg" social="comm">
        <MDBIcon icon="comments" />
      </MDBBtn>
      <MDBBtn size="lg" social="email">
        <MDBIcon icon="envelope" />
      </MDBBtn>
      <MDBBtn size="lg" social="dribbble">
        <MDBIcon icon="dribbble" />
      </MDBBtn>
    </MDBContainer>
  );
}

export default SocialButtonsPage;
import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  max-width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      height: 24px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    a {
      font-weight: 500;
      margin-right: 15px;
      color: #232129cc;
      font-size: 15px;
      line-height: 18px;
      text-decoration: none;
      text-transform: uppercase;
    }

    a.first-link {
      margin-left: 10px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  button {
    display: flex;
    align-items: center;
    background: none;
    border: 0;
    color: #c5392f;

    &:hover {
      color: ${lighten(0.2, '#c5392f')};
    }

    svg {
      margin-left: 8px;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
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
    aside {
      display: flex;
      align-items: center;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #666666;
    }
    button {
      display: block;
      background: none;
      border: none;
      margin-top: 2px;
      font-size: 14px;
      color: #de3b3b;
    }
  }
`;

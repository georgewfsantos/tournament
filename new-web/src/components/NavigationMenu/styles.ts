import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

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
      color: rgba(35, 33, 41, 0.8);
      font-size: 14px;
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

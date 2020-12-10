import styled from 'styled-components';
import banner from '~/assets/banner.jpeg';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background: #83c180;

  section {
    position: relative;
    width: 100%;
    height: 80vh;
    display: flex;
    background-image: url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;

    background: url(${banner}) cover no-repeat;

    .title {
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      text-align: center;
      color: #fff;
      justify-content: center;
      align-items: center;
      font-size: 60px;
    }
  }
`;

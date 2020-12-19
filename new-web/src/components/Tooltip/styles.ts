import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    background: #32067c;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    width: 160px;
    left: 50%;
    transform: translateX(-50%);

    color: #c5392f;

    &::before {
      border-style: solid;
      border-color: #32067c transparent;
      border-width: 6px 6px 0 6px;
      bottom: 20px;
      top: 100%;
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;

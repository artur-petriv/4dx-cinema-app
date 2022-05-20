import { observer } from 'mobx-react-lite';
import React from 'react';
import { Context } from '../..';
import styled from 'styled-components';
import PopupSimple from './PopupSimple';
import PopupForm from './PopupForm';
import PopupSession from './PopupSession';

const Popup = () => {
  const { modal } = React.useContext(Context);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      modal.setVisible(false);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, []);

  return (
    <PopupOverlay>
      <Box ref={ref}>
        <CloseBtn onClick={() => modal.setVisible(false)} />
        {modal.type === 'simple' && <PopupSimple />}
        {modal.type === 'film' && <PopupForm />}
        {modal.type === 'session' && <PopupSession />}
      </Box>
    </PopupOverlay>
  );
};

const PopupOverlay = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: var(--z-index-third);
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Box = styled.div`
  margin-top: 6%;
  padding: 24px;
  background-color: var(--gray-0);
  border-radius: var(--border-radius-medium);
  height: auto;
  z-index: 1000;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 4px;
  right: -36px;
  height: 28px;
  width: 28px;
  cursor: pointer;
  &::before {
    content: '';
    width: 3px;
    height: 28px;
    border-radius: 8px;
    background-color: var(--gray-0);
    position: absolute;
    right: 14px;
    transform: rotate(45deg);
  }
  &::after {
    content: '';
    width: 3px;
    height: 28px;
    border-radius: 8px;
    background-color: var(--gray-0);
    position: absolute;
    right: 14px;
    transform: rotate(135deg);
  }
`;

export default observer(Popup);

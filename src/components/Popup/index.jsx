import { observer } from 'mobx-react-lite';
import React from 'react'
import { Context } from '../..';
import LabelInput from '../Label/LabelInput';
import styled from "styled-components";

const Popup = () => {
	const { modal } = React.useContext(Context);
	const ref = React.useRef(null);

	React.useEffect(() => {
		const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      modal.setVisible(false);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
	}, []);

	return (
    <PopupOverlay>
      <Box ref={ref}>
        <CloseBtn onClick={() => modal.setVisible(false)} />
        {modal.type === "simple" ? "" : (
          ""
        )}
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
  z-index: 1;
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
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 4px;
  right: -36px;
  height: 28px;
  width: 28px;
  cursor: pointer;
  &::before {
    content: "";
    width: 3px;
    height: 28px;
    border-radius: 8px;
    background-color: var(--gray-0);
    position: absolute;
    right: 14px;
    transform: rotate(45deg);
  }
  &::after {
    content: "";
    width: 3px;
    height: 28px;
    border-radius: 8px;
    background-color: var(--gray-0);
    position: absolute;
    right: 14px;
    transform: rotate(135deg);
  }
`;

const LabelsWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

const LabelButton = styled.button`
  margin-top: 24px;
  padding: 12px;
  width: 100%;
  max-width: 320px;
  background-color: var(--brand-color);
  color: var(--gray-0);
  border-radius: var(--border-radius-medium);
  line-height: 1;
  font-weight: 600;
  transition: background-color 0.3s, opacity 0.3s;
  opacity: 0.95;
  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 0.9;
  }
`;

const Legend = styled.h6`
  padding-bottom: 12px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--gray-2);
  font-size: var(--h6-font-size);
  font-weight: var(--font-semi-bold);
`;

export default observer(Popup);
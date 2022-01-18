import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { getIcon } from "../utils/getIcon";
import { Close } from "styled-icons/material/Close";


const NotificationContainer = styled(motion.div)`
  display: flex;
  color: #454545;
  border-radius: 2px;
  overflow: hidden;
  width: 450px;
  margin-bottom: 12px;
  box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.25);
  border: 2px solid;
  border-color: ${(props) => props.iconColor};
  background-color: ${(props) => props.backgroundColor};
`;

const Main = styled.div`
  padding: 8px 16px 8px 16px;
  display: flex;
  flex: 1;

  & > div:first-child {
    margin-right: 20px;
  }
`;

const Description = styled.div`
  line-height: 1.3;
  font-size: 12px;
  color: #454545;
`;

const Title = styled.div`
  line-height: 1.3;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 4px;
`;

const Buttons = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  pointer-events: all;
  transition: background-color 0.15s ease-in-out;
  flex: 1;
  padding: 8px;
  background-color: rgb(255, 255, 255, 0.05);
  outline: 0;
  border: 0;
  color: #454545;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: rgb(255, 255, 255, 0.1);
  }
`;

function Notification({ title, description, type, onClose, onMore }) {
  const { Icon, iconColor, backgroundColor } = getIcon(type);

  return (
    <NotificationContainer
      initial={{ opacity: 0, scale: 0.8, x: 300 }} // animate from
      animate={{ opacity: 1, scale: 1, x: 0 }} // animate to
      exit={{ opacity: 0, scale: 0.8, x: 300 }} // animate exit
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 40,
      }}
      positionTransition // auto animates the element when it's position changes
      iconColor={iconColor}
      backgroundColor={backgroundColor}
    >
      <Main>
        <div>
          <Icon size={24} style={{ color: iconColor }} />
        </div>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
      </Main>
      <Buttons>
        <Button onClick={onClose}>
          <Close size={20}/>
        </Button>
        {onMore && <Button onClick={onMore}>More...</Button>}
      </Buttons>
    </NotificationContainer>
  );
}

export default Notification;

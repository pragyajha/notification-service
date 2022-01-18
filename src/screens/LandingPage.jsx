import { useNotify } from "../hooks/useNotify";
import styled from "styled-components";

const Container = styled.div`
  padding: 8px 16px 8px 16px;
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-color:#eff9f7;
`;

const StyledButton = styled.button`
  margin: 8px;
  padding: 8px;
  background-color: #05668d;
  color: white;
  width: 30%;
  outline: 0;
  border: 0;
  cursor: pointer;
  box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: #05668d;
  }
`;

const Header = styled.h2`
  color: #02a896;
`;

export default function LandingPage() {
  const notify = useNotify();

  return (
    <Container>
      <Header>React Toast Notifications</Header>
      <StyledButton
        onClick={() =>
          notify({ title: "Created new user", description: "Nico Dietz" })
        }
      >
       Success
      </StyledButton>
      <StyledButton
        onClick={() =>
          notify({
            type: "success",
            title: "Created new user",
            description: "Nico Dietz",
            onMore: () => alert("More!"),
          })
        }
      >
        Success (with more)
      </StyledButton>
      <StyledButton
        onClick={() =>
          notify({
            type: "warning",
            title: "Backup",
            description:
              "Your iCloud backup is not uptodate",
          })
        }
      >
        Warning
      </StyledButton>
      <StyledButton
        onClick={() =>
          notify({
            type: "error",
            title: "Couldn't save",
            description: "Your backup couldn't be saved",
          })
        }
      >
       Error
      </StyledButton>
      <StyledButton
        onClick={() =>
          notify({
            type: "info",
            title: "Hello",
            description: "Welcome to soSafe!",
          })
        }
      >
        Information
      </StyledButton>
    </Container>
  );
}

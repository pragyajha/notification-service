import { useNotify } from "../hooks/useNotify";
import styled from "styled-components";

const Container = styled.div`
  padding: 8px 16px 8px 16px;
  display: 'flex';
`;
export default function LandingPage() {
  const notify = useNotify();

  return (
    <Container>
      <button
        onClick={() =>
          notify({ title: "Created new user", description: "Nico Dietz" })
        }
      >
       Success
      </button>
      <button
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
      </button>
      <button
        onClick={() =>
          notify({
            type: "warning",
            title: "Backup",
            description:
              "It's been over 7 days since you have last made a back-up",
          })
        }
      >
        Warning
      </button>
      <button
        style={{ marginBottom: 16 }}
        onClick={() =>
          notify({
            type: "error",
            title: "Couldn't save",
            description: "Please fill in the required fields",
          })
        }
      >
       Error
      </button>
      <button
        style={{ marginBottom: 16 }}
        onClick={() =>
          notify({
            type: "info",
            title: "Hello",
            description: "This in information",
          })
        }
      >
        Information
      </button>
    </Container>
  );
}

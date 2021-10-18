import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Button from "../Button/Button";
import Prices from "./Prices";

const ListItemStyles = styled.div`
  background: #fbfbfb;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02),
    0px 24px 48px rgba(44, 39, 56, 0.04);
  border-radius: 24px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;

  .prices_container {
    margin: 10px 0 20px 0;
  }
  button {
    margin-top: auto;
  }
`;

function ListItem(props) {
  const history = useHistory();
  return (
    <ListItemStyles>
      <h4 className="font-700 font-xl">{props.title}</h4>
      <Prices {...props} />
      <Button
        onClick={() => {
          history.push("/deal/" + props.id);
        }}
      >
        View More
      </Button>
    </ListItemStyles>
  );
}

export default ListItem;

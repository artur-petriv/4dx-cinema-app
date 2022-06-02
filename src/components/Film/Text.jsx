import React from "react";
import styled from "styled-components";

export default function TextIndex({ title, text }) {
  return (
    <Text>
      <strong>{title}: </strong>
      {text}
    </Text>
  );
}

const Text = styled.div``;

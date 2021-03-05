import React, { useMemo } from "react";
import emojis from "../../utils/emojis";

import { Container, Profile, Welcome, Username } from "./styles";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    return emojis[Math.floor(Math.random() * emojis.length)];
  }, []);

  return (
    <Container>
      <h1>Toggle</h1>
      <Profile>
        <Welcome>Olá, {emoji} </Welcome>
        <Username>Vyctor Guimarães</Username>
      </Profile>
    </Container>
  );
};

export default MainHeader;

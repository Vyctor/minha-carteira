import React, { useMemo } from "react";
import emojis from "../../utils/emojis";

import { Container, Profile, Welcome, Username } from "./styles";

// Components
import Toggle from "../Toggle/index";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    return emojis[Math.floor(Math.random() * emojis.length)];
  }, []);

  return (
    <Container>
      <Toggle />
      <Profile>
        <Welcome>Olá, {emoji} </Welcome>
        <Username>Vyctor Guimarães</Username>
      </Profile>
    </Container>
  );
};

export default MainHeader;

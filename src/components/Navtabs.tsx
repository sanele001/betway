import { Tabs, Tab, Container, useMediaQuery, useTheme } from "@mui/material";

import styles from "@/styles/NavTabs.module.css";
import { useState } from "react";

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  const tabStyle = {
    color: "white",
    fontSize: "0.7rem",
  };
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      style={tabStyle}
      {...props}
    />
  );
}

const NavTabs: React.FC = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.tabHolder}>
      <Container>
        <Tabs
          value={value}
          onChange={handleChange}
          variant={isSmallScreen ? "scrollable" : "fullWidth"}
          TabIndicatorProps={{
            style: {
              backgroundColor: "green",
              color: "green",
            },
          }}
        >
          <LinkTab label="sports" href="/sports" />
          <LinkTab label="live" href="/live" />
          <LinkTab label="casino" href="/spam" />
          <LinkTab label="esports" href="/esports" />
          <LinkTab label="vegas" href="/vegas" />
        </Tabs>
      </Container>
    </div>
  );
};
export default NavTabs;

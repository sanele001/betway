import { Tabs, Tab, Container, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import styles from "@/styles/NavTabs.module.css";
import { useState } from "react";

const CustomTabs = styled(Tabs)({
  "& .Mui-selected": {
    color: "white", // Change the font active tab
  },
  "& .Mui-selected .MuiTab-wrapper": {
    fontWeight: "bold", // Change the font weight of the active tab
  },
  "& .MuiTabs-indicator": {
    backgroundColor: "green", // Change the color of the indicator bar
  },
  //
  "& .MuiTab-root": {
    color: "grey",
    "&.Mui-selected": {
      color: "white", // Change the color of the selected tab back to default
    },
  },
});

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      style={{
        fontSize: "0.9rem",
        fontWeight: "bold",
        textTransform: "lowercase",
      }}
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
        <CustomTabs
          value={value}
          onChange={handleChange}
          variant={isSmallScreen ? "scrollable" : "fullWidth"}
        >
          <LinkTab label="sports" href="/sports" />
          <LinkTab label="live" href="/live" />
          <LinkTab label="casino" href="/spam" />
          <LinkTab label="esports" href="/esports" />
          <LinkTab label="vegas" href="/vegas" />
        </CustomTabs>
      </Container>
    </div>
  );
};
export default NavTabs;

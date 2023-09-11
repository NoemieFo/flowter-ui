import { useMediaQuery } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import ExpandArrowWhite from "@pictures/icons/menu/expand_arrow_white.svg";
import Image from "mui-image";
import * as React from "react";
import { AppMenuContent } from "./appMenuContent.component";

const drawerWidth = 340;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const AppMenu = () => {
  const theme = useTheme();
  const [isDrawerOpened, setIsDrawerOpened] = React.useState<boolean>(false);
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  // if (isPhone) {
  //   return (
  //     <React.Fragment>
  //       <AppBar
  //         position="fixed"
  //         color="primary"
  //         sx={{
  //           top: "auto",
  //           bottom: 0,
  //           backgroundColor: theme.palette.primary.dark,
  //         }}
  //       >
  //         <Toolbar>
  //           <Box sx={{ width: "100%" }}>
  //             <Grid
  //               columns={5}
  //               container
  //               rowSpacing={1}
  //               columnSpacing={{ xs: 1, sm: 2, md: 3 }}
  //             >
  //               <Grid xs={1}>
  //                 <Image src={Calendar} alt="fonctionnalités" />
  //               </Grid>
  //               <Grid xs={1}>
  //                 <Image src={Calendar} alt="fonctionnalités" />
  //               </Grid>
  //               <Grid xs={1}>
  //                 <Image src={Calendar} alt="fonctionnalités" />
  //               </Grid>
  //               <Grid xs={1}>
  //                 <Paper>4</Paper>
  //               </Grid>
  //               <Grid xs={1}>
  //                 <Paper>5</Paper>
  //               </Grid>
  //             </Grid>
  //           </Box>
  //         </Toolbar>
  //       </AppBar>
  //     </React.Fragment>
  //   );
  // }
  return isPhone ? (
    <></>
  ) : (
    <>
      <AppBar
        position="fixed"
        open={isDrawerOpened}
        onClick={() => setIsDrawerOpened(!isDrawerOpened)}
        sx={{
          width: "40px",
          height: "64px",
          backgroundColor: theme.palette.primary.dark,
          right: "auto",
          left: isDrawerOpened ? "0px" : "64px",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <Image
          src={ExpandArrowWhite}
          alt="arrow"
          style={{ width: "28px", height: "28px" }}
          duration={0}
          wrapperStyle={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            transform: isDrawerOpened ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </AppBar>
      <AppMenuContent opened={isDrawerOpened} />
    </>
  );
};

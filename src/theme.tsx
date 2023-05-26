import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    // Name of the component
    MuiCard: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          backgroundColor: "rgba(255, 0, 0, 0.3)",
        },
      },
      variants: [
        {
          props: { raised: true },
          style: {
            "&:hover": {
              backgroundColor: "rgba(255, 0, 0, 0.6)",
              color: "white",
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
            },
          },
        },
        {
          props: { raised: false },
          style: {
            "&:hover": {
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              color: "#000",
            },
          },
        },
      ],
    },
    MuiAvatar: {
      //   styleOverrides: {
      //     // circular: {
      //     //   "&:hover": {
      //     //     backgroundColor: "#f4433638",
      //     //   },
      //     // },
      //   //   root: ({ ownerState }) => ({
      //   //     ...(ownerState["aria-label"] === "customReceipe" && {
      //   //       "&:hover": {
      //   //         backgroundColor: "#ffffff",
      //   //         color: "#000",
      //   //       },
      //   //     }),
      //   //   }),
      //   // },

      // },
      variants: [
        {
          props: { alt: "customRec" },
          style: {
            "&:hover": {
              backgroundColor: "#f4433638",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            },
          },
        },
        {
          props: { alt: "Receipe" },
          style: {
            "&:hover": {
              backgroundColor: "#ffffff",
              color: "#000",
            },
          },
        },
      ],
    },
  },
});

export default theme;

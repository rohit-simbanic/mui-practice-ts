import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import SubsBtn from "./SubsBtn";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  padding: theme.spacing(4),
  textAlign: "left",
  color: theme.palette.text.secondary,
  width: "100%",
  borderRadius: "10px",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
}));

const SubscribeCommonBox = () => {
  return (
    <Stack direction="row">
      <Item>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Telenor_Logo.svg/1600px-Telenor_Logo.svg.png"
          alt="logo"
          width={62}
          height={"auto"}
        />
        <Typography variant="h4" gutterBottom>
          Ice Mobile 10GB
        </Typography>
        <Typography variant="body1" gutterBottom>
          Up to 100Mbit/s
        </Typography>
        <Typography variant="body2" gutterBottom>
          299,- /month
        </Typography>
        <SubsBtn />
      </Item>
    </Stack>
  );
};

export default SubscribeCommonBox;

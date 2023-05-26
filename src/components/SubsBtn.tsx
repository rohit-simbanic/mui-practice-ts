import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.secondary.main,
  maxWidth: 400,
  borderRadius: "9999px",
  marginTop: "35px",
  boxShadow:
    "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
  cursor: "pointer",
}));
const SubsBtn = () => {
  return (
    <Item>
      <Typography variant="body2" gutterBottom>
        Add Subscription
      </Typography>
    </Item>
  );
};

export default SubsBtn;

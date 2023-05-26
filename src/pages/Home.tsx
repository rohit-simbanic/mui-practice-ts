import Container from "@mui/material/Container";

import SubscriptionBox from "../components/SubscriptionBox";

const Home = () => {
  return (
    <Container fixed sx={{ marginTop: "20px" }}>
      <SubscriptionBox />
    </Container>
  );
};

export default Home;

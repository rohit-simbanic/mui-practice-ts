import Container from "@mui/material/Container";

import SubscriptionBox from "../components/SubscriptionBox";
import RecipeReviewCard from "../components/RecipeReviewCard";

const Home = () => {
  return (
    <>
      <Container fixed sx={{ marginTop: "20px" }}>
        <SubscriptionBox />
      </Container>
      <RecipeReviewCard />
    </>
  );
};

export default Home;

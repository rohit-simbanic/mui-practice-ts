import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedTwo, setExpandedTwo] = React.useState(false);
  const [expandedThree, setExpandedThree] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClickMore = () => {
    setExpandedTwo(!expandedTwo);
  };
  const handleExpandClickMuch = () => {
    setExpandedThree(!expandedThree);
  };

  const [item, setItem] = React.useState<boolean>(true);

  return (
    <div style={{ width: "75%", margin: "5% auto" }}>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: "100%" }} raised={true}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="customReceipe"
                    alt="customRec"
                  >
                    D
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Doro Onome Churchill"
                subheader="nomzykush@gmail.com"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Front-end developer and Technical writer with keen attention
                  to detail and a passion for delivering content as interactive
                  as it is educational.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Chevrolet Description</Typography>
                  <Typography paragraph>
                    Chevrolet is an iconic American automobile brand founded in
                    1911 by Louis Chevrolet and William C. Durant
                  </Typography>
                  <Typography paragraph>
                    It is currently the fourth-largest automotive brand in the
                    United States and is a division of General Motors. Chevrolet
                    has become one of America’s most iconic brands, producing
                    reliable and stylish cars, trucks, and SUVs for over a
                    century. Its models range from the economical Spark to the
                    luxurious Corvette.
                  </Typography>
                  <Typography paragraph>
                    Chevrolet is also known for its commitment to safety,
                    providing advanced features like lane departure warning and
                    front crash prevention. (Discard any mussels that don&apos;t
                    open.)
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: "100%" }} raised={false}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
                    alt="Receipe"
                  >
                    D
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Doro Onome Churchill"
                subheader="nomzykush@gmail.com"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Front-end developer and Technical writer with keen attention
                  to detail and a passion for delivering content as interactive
                  as it is educational.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expandedTwo}
                  onClick={handleExpandClickMore}
                  aria-expanded={expandedTwo}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expandedTwo} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Chevrolet Description</Typography>
                  <Typography paragraph>
                    Chevrolet is an iconic American automobile brand founded in
                    1911 by Louis Chevrolet and William C. Durant
                  </Typography>
                  <Typography paragraph>
                    It is currently the fourth-largest automotive brand in the
                    United States and is a division of General Motors. Chevrolet
                    has become one of America’s most iconic brands, producing
                    reliable and stylish cars, trucks, and SUVs for over a
                    century. Its models range from the economical Spark to the
                    luxurious Corvette.
                  </Typography>
                  <Typography paragraph>
                    Chevrolet is also known for its commitment to safety,
                    providing advanced features like lane departure warning and
                    front crash prevention. (Discard any mussels that don&apos;t
                    open.)
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: "100%" }} raised={false}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
                    alt="Receipe"
                  >
                    D
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Doro Onome Churchill"
                subheader="nomzykush@gmail.com"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Front-end developer and Technical writer with keen attention
                  to detail and a passion for delivering content as interactive
                  as it is educational.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expandedThree}
                  onClick={handleExpandClickMuch}
                  aria-expanded={expandedThree}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expandedThree} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Chevrolet Description</Typography>
                  <Typography paragraph>
                    Chevrolet is an iconic American automobile brand founded in
                    1911 by Louis Chevrolet and William C. Durant
                  </Typography>
                  <Typography paragraph>
                    It is currently the fourth-largest automotive brand in the
                    United States and is a division of General Motors. Chevrolet
                    has become one of America’s most iconic brands, producing
                    reliable and stylish cars, trucks, and SUVs for over a
                    century. Its models range from the economical Spark to the
                    luxurious Corvette.
                  </Typography>
                  <Typography paragraph>
                    Chevrolet is also known for its commitment to safety,
                    providing advanced features like lane departure warning and
                    front crash prevention. (Discard any mussels that don&apos;t
                    open.)
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

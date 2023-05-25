import React, { useState } from "react";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize primary color
    },
  },
});

// Define styles for the form
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2),
  },
  field: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const FormComponent: React.FC = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission or data processing here
    console.log(formData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              className={classes.field}
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
            />
            <TextField
              className={classes.field}
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleFormChange}
            />
            <TextField
              className={classes.field}
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
            />
            <TextField
              className={classes.field}
              label="Phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
            />
            <TextField
              className={classes.field}
              label="Message"
              multiline
              minRows={4}
              name="message"
              value={formData.message}
              onChange={handleFormChange}
            />
            <Button
              className={classes.button}
              variant="outlined"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default FormComponent;

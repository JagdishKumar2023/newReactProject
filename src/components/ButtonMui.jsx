import { Button, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { Add } from "@mui/icons-material";

export const ButtonMui = () => {
  const BlueButton = styled(
    Button(({ theme }) => ({
      backgroundColor: theme.plette.otherColor.main,
      color: "#888",
      margin: 5,
      "&:hover": {
        backgroundColor: "light",
      },
      "&: disabled": {
        backgroundColor: "gray",
        color: "white",
      },
    }))
  );
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<SettingsIcon />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Settings
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        size="small"
      >
        Add new post
      </Button>
      <Typography variant="h1" component="p">
        Its user h1 style but it's a p tag
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          margin: 5,
          "&:hover": {
            backgroundColor: "lightblue",
          },
        }}
      >
        My Unique Button
      </Button>
    </div>
  );
};

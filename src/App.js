import { Box, Stack } from "@mui/material";
import "./App.css";
import { Feed } from "./WebComponents/Feed";
import { Right } from "./WebComponents/Right";
import { SideBar } from "./WebComponents/SideBar";
import { Navbar } from "./WebComponents/Navbar";

function App() {
  return (
    <div>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar />
          <Feed />
          <Right />
        </Stack>
      </Box>
    </div>
  );
}

export default App;

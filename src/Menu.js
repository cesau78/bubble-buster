import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import SettingsIcon from "@mui/icons-material/Settings";

export const Menu = (props = {}) => {
  const { id = "menu", className = "Menu", style, onSettingsClick } = props;

  return (
    <Stack
      direction="row-reverse"
      spacing={2}
      id={id}
      className={className}
      style={style}
    >
      <IconButton
        aria-label="settings"
        color="primary"
        onClick={onSettingsClick}
      >
        <SettingsIcon sx={{ fontSize: 40 }} />
      </IconButton>
    </Stack>
  );
};
export default Menu;

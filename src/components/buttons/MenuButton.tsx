import MenuIcon from "@mui/icons-material/Menu";

interface MenuButtonProps {
  onClick: () => void;
  className: string;
}

export default function MenuButton({ onClick, className }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} absolute  right-4`}
      aria-label="Close mobile navigation menu"
    >
      <MenuIcon fontSize="inherit" />
    </button>
  );
}

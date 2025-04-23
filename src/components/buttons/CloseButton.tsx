import CloseIcon from "@mui/icons-material/Close";

interface CloseButtonProps {
  onClick: () => void;
}

export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      onClick={onClick}
      className="absolute top-4 right-4 text-3xl"
      aria-label="Close menu"
    >
      <CloseIcon fontSize="inherit" />
    </button>
  );
}

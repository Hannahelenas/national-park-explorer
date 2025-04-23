export default function LogInButton({ className }: { className: string }) {
  return (
    <button
      className={`${className} bg-[var(--color-primary)] border-2 
        border-[var(--color-primary)] text-white px-6 py-2 rounded-full transition-all 
        duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-black 
        hover:border-[var(--color-primary)]`}
    >
      Log in
    </button>
  );
}

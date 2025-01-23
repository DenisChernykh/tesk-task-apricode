function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="flex justify-center gap-4 bg-orange-400 py-7">
      {children}
    </header>
  );
}

export default Header;

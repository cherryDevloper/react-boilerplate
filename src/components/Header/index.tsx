interface HeaderProps {
  isTopLevelRoute: boolean;
  title?: string;
}
function Header({ isTopLevelRoute, title }: HeaderProps) {
  return (
    <>
      <div className="">{isTopLevelRoute ? <>{title}</> : <></>}</div>
    </>
  );
}

export default Header;

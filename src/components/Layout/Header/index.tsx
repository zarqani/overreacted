import Author from "./Author";
import ToggleColorScheme from "./ToggleColorScheme";
import TypoLogo from "./TypoLogo";

export default function Header() {
  return (
    <header className="mb-14 flex flex-row place-content-between">
      <TypoLogo />
      <div className="flex flex-row place-content-between">
        <ToggleColorScheme />
        <Author />
      </div>
    </header>
  );
}

import MobileNav from "../mobile-nav/mobile-nav.component";
import DeskNav from "../desk-nav/desk-nav.component";

import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function Nav() {
  const { width } = useWindowDimensions();

  return width > 600 ? <DeskNav /> : <MobileNav />;
}

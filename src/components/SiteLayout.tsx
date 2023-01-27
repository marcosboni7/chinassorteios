import { ReactElement } from "react";
import ToasterLayout from "./ToasterLayout";

import Header from "./Header";

const SiteLayout = ({ children }: { children: ReactElement }) => {

  return (
    <ToasterLayout>
      <Header />
      {children}
    </ToasterLayout>
  );
};

export default SiteLayout;
import dynamic from "next/dynamic";
import { ReactNode } from "react";
import { Toaster } from 'react-hot-toast';

/*const Toaster = dynamic(
  () => import("react-hot-toast").then((c) => c.Toaster),
  {
    ssr: false,
  }
);*/

const ToasterLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default ToasterLayout;
import { PropsWithChildren } from "react";
import Footer from "../../components/footer";
import HeaderAdmin from "../../components/header-admin";

type AdminTemplateProps = PropsWithChildren & {};

export default function AdminTemplate(props: AdminTemplateProps) {
  return (
    <div className=" flex min-h-screen flex-col">
      <HeaderAdmin />
      <div className="flex flex-1 flex-col p-[10%] py-[20px]">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

import { PropsWithChildren } from "react";
import Footer from "../../components/footer";

type AuthTemplateProps = PropsWithChildren & {};

export default function AuthTemplate(props: AuthTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-primary flex justify-between p-2">
        <h1 className="text-[30px] font-bold text-white">Unybay</h1>
        <div />
      </div>
      <div className="flex flex-1 flex-col p-[10%] py-[20px] justify-center items-center">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

import { PropsWithChildren, useEffect } from "react";
import Footer from "../../components/footer";
import HeaderAdmin from "../../components/header-admin";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import { useNavigate } from "react-router-dom";

type AdminTemplateProps = PropsWithChildren & {};

export default function AdminTemplate(props: AdminTemplateProps) {
  const { token } = useAuthSessionStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

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

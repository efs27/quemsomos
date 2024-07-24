import UserTemplate from "../../templates/user-template";

export default function NotFound() {
  return (
    <UserTemplate>
      <div className="flex flex-1 justify-center items-center">
        <h1 className="text-[20px]">Página Not Found</h1>
      </div>
    </UserTemplate>
  );
}

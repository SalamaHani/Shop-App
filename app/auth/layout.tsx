function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-h-screen  flex items-center justify-center ">
      <div className="w-full max-w-md  rounded shadow-md">{children}</div>
    </div>
  );
}
export default AuthLayout;

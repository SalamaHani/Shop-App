function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-h-screen  flex items-center justify-center ">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
        {children}
      </div>
    </div>
  );
}
export default AuthLayout;

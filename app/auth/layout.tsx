function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="max-h-screen flex items-center justify-center ">
          <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
            <h1>Layout Auth</h1>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
export default AuthLayout;

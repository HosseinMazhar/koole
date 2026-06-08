const LoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="w-screen h-screen bg-background">{children}</main>;
};

export default LoginLayout;

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen min-h-fit flex items-center justify-center bg-background px-4">
      {children}
    </main>
  );
}
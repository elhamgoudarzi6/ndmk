import "@/app/globals.css";
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa">
      <body>
        <main className="bg-gray-100">
          {children}
        </main>
      </body>
    </html>
  );
}
export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-6 py-12 mx-auto">
        <div className="flex flex-col items-center justify-between text-sm md:flex-row">
          <p className="mb-6 md:mb-0">
            © {new Date().getFullYear()} Driver Training
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <div className="w-full absolute bottom-0 mb-4 hidden md:flex left-0 justify-center text-blue text-xs">
      <p>
        © {new Date().getFullYear()} | Site built by{" "}
        <a href="https://danlubbers.com">Dan Lubbers</a>
      </p>
    </div>
  );
}

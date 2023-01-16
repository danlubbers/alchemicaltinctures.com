export default function Footer() {
  return (
    <div className="w-full my-4 relative bottom-0 left-0 text-center text-blue text-xs">
      <p>
        © {new Date().getFullYear()} | Site built by{" "}
        <a
          className="text-blueHover md:text-blue"
          href="https://danlubbers.com"
          target="_blank"
          rel="noreferrer"
        >
          Dan Lubbers
        </a>
      </p>
    </div>
  );
}

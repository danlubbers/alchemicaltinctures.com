export default function Footer() {
  return (
    <div className="relative bottom-0 left-0 my-4 w-full text-center text-xs text-blue">
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

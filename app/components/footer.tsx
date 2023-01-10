export default function Footer() {
  return (
    <div className="w-full my-4 relative md:absolute bottom-0 left-0 text-center text-blue text-xs">
      <p>
        © {new Date().getFullYear()} | Site built by{" "}
        <a
          className="hover:text-blueHover text-blueHover md:text-blue"
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

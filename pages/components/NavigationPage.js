import Link from "next/link";

function NavigationPage() {
  return (
    <div>
      <h4>Navigation</h4>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationPage;

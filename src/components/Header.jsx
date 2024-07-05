import Logo from '../assets/logo.jpg';

export default function Header({}) {
  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="header_logo" />
        <h1>JungHyun's Food</h1>
      </div>
      <nav>
        <button className="text-button">cart({})</button>
      </nav>
    </header>
  );
}

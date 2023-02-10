import "./Footer.css";

function Footer() {
  return (
    <footer class="bg-light text-center text-lg-start footerStyle">
      <div
        class="text-center p-3"
        style={{"background-color": "rgba(0, 0, 0, 0.2);"}}
      >
        {" "}
        © 2023 Copyright:
        <a class="text-dark" href="https://github.com/emanuelpps">
          Created by Emanuel Pages
        </a>
      </div>
    </footer>
  );
}

export default Footer;
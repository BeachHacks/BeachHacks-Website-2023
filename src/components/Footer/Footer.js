import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div class="social">
        <a href="https://www.google.com/" target="blank">
          <i class="fab fa-instagram"></i>{" "}
        </a>
        <a href="https://www.google.com/" target="blank">
          <i class="fab fa-twitter"></i>{" "}
        </a>
        <a href="https://www.google.com/" target="blank">
          <i class="fab fa-linkedin"></i>{" "}
        </a>
        <a href="https://www.google.com/" target="blank">
          <i class="fab fa-facebook-f"></i>{" "}
        </a>
      </div>

      <div>
        <p>Made by Team BeachHacks</p>
      </div>
    </footer>
  );
};

export default Footer;

import qrcode from "../images/image-qr-code.png"

function QrCode() {
  return (
    <main>
      <section className="qr-code-container">
        <img src={qrcode} alt="qr code" />
      </section>
      <section className="text-container">
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </section>
    </main>
  );
}

export default QrCode

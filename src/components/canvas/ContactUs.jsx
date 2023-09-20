import React, { useRef, useState } from "react";
import "./contactUs.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Scene from "./Scene";

export const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); // Nuevo estado para indicar si se está cargando

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true); // Mostrar indicador de carga

    try {
      const result = await emailjs.sendForm(
        "service_xj2dapj",
        "template_lkdt5yo",
        form.current,
        "eupftr61pLADvCePL"
      );

      console.log(result.text);

      // Mostrar mensaje de éxito
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Email sent successfully.",
      });

      // Reiniciar el formulario
      form.current.reset();
    } catch (error) {
      console.error(error.text);
    } finally {
      setLoading(false); // Ocultar indicador de carga después de enviar el correo
    }
  };

  return (
    <div className="canvaC">
      <div className="formDiv">
        <p>Get in touch</p>
        <h2 className="titles">Contact me:</h2>
        <form ref={form} onSubmit={sendEmail} className="field">
          <label>Your Name</label>
          <input type="text" name="user_name" placeholder="Enter your Name"/>
          <label>Your Email</label>
          <input type="email" name="user_email" placeholder="Enter your email"/>
          <label>Your Message</label>
          <textarea name="message"  placeholder="Enter your message"/>
          <button type="submit" value="Send" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
      <Scene/>
    </div>
  );
};
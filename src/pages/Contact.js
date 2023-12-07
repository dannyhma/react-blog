import { useEffect } from 'react';

export default function Contact() {
  useEffect(function () {
    document.title = 'Contact';
  }, []);

  return (
    <>
      <section>
        <h1>Contact</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </section>
    </>
  );
}

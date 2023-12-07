import { useEffect } from "react";

export default function Home() {
  useEffect(function () {
    document.title = "Home";
  }, []);

  return (
    <>
      <section>
        <h1>Selamat data di websiteku</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </section>
    </>
  );
}

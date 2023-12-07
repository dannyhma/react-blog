import { useEffect } from 'react';

export default function NotFound() {
  useEffect(function () {
    document.title = 'NotFound';
  }, []);

  return (
    <>
      <section>
        <h1>404 Not Found</h1>
        <p>Halaman ini tidak ditemukan</p>
      </section>
    </>
  );
}

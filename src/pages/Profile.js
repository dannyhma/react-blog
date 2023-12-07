import { useEffect } from 'react';

export default function Profile() {
  useEffect(function () {
    document.title = 'Profile';
  }, []);

  return (
    <>
      <section>
        <h1>Profile</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </section>
    </>
  );
}

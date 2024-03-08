import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Acerca de - Mi Blog Next.js</title>
        <meta
          name="description"
          content="Más información sobre Mi Blog Next.js"
        />
      </Head>
      <main>
        <h1>Acerca De</h1>
        <p>
          Este blog es un proyecto de ejemplo para demostrar cómo se puede usar
          Next.js para construir aplicaciones web.
        </p>
        <p>
          Next.js proporciona una excelente base para construir sitios web con
          React, ofreciendo renderizado del lado del servidor, generación de
          sitios estáticos, y mucho más.
        </p>
      </main>
    </>
  );
}

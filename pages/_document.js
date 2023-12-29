// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          {/* Füge hier den Google Analytics-Tracking-Code ein */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-6ZVYEHY5T0"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-6ZVYEHY5T0', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          {/* Füge hier weitere Head-Elemente hinzu, falls benötigt */}
          <script src="/scripts/tawk.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

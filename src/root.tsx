// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {

  function openExternalUrl2(url) {
    if (window.getSelection().toString().length == 0)
      window.open(url);
  }


  
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            
          <a href="/" onClick={(e) => { e.preventDefault(); openExternalUrl2('/'); }}>Index</a>
            <a href="http://casey-test.netlify.app/" onClick={(e) => { e.preventDefault(); openExternalUrl2('http://casey-test.netlify.app/'); }}>Casey's Page</a>
            <a href="https://gis-6500-test.netlify.app/" onClick={(e) => { e.preventDefault(); openExternalUrl2('https://gis-6500-test.netlify.app/'); }}>GisScheme Test</a>
            <a href="mailto:LoveJL@ornl.gov">Email Us</a>
            <a href="tel:+18655766992">Call Us</a>                      
            
            
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}

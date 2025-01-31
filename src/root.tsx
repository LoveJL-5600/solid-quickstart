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
      // window.open(url, "_blank");
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
            
           <A href="/">Index</A>
            <A href="http://casey-test.netlify.app/">Casey's Page</A>
             <A href="https://gis-6500-test.netlify.app/">GisScheme Test</A>
            <A href="mailto://LoveJL@ornl.gov">Email Us</A>
            <A href="tel://+18655766992">Call Us</A>
                  
           
            <a href="http://casey-test.netlify.app/" onClick={(e) => { e.preventDefault(); openExternalUrl2('http://casey-test.netlify.app/'); }}>Casey's Page External</a>
            <a href="https://gis-6500-test.netlify.app/" onClick={(e) => { e.preventDefault(); openExternalUrl2('https://gis-6500-test.netlify.app/'); }}>GisScheme Test External</a>
            <a href="https://apple.com" target="_blank" >Apple</a>
            
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

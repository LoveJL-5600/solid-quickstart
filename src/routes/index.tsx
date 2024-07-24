import { Title } from "solid-start";
import Counter from "~/components/Counter";


export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
      <button class="increment" onclick="document.getElementById('inputFile1').style.display = 'inline'">
        Show File Upload
      </button>
      </p>
      <input id="inputFile1" type="file" style="display:none;"/>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}

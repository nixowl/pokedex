import { useState } from "react";
import "./globals.css";
import SearchField from "./components/SearchField";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";


function App() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("")

  return (
    <>
      <Header />
      <main className="flex flex-col flex-1 gap-4 justify-between place-items-center">
        <section className="flex flex-col gap-4 h-full w-full">
          <SearchField setQuery={setQuery} query={query} type={type} setType={setType} />
          <Content query={query} type={type} />
        </section>
      </main>
     <Footer />
    </>
  );
}

export default App;

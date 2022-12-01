import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Page from "./Page";

const pages = Array(5)
  .fill(0)
  .map((_, i) => `page-${i}`);

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("");

  const handleSelect = useCallback(
    (event: React.MouseEvent<HTMLSpanElement>) => {
      const nextPage = event.currentTarget.dataset["page"];

      if (nextPage) {
        setSelectedPage(nextPage);
      }
    },
    []
  );

  return (
    <div className="App">
      <div className="App__pageSelector">
        {pages.map((pageName) => (
          <span
            key={pageName}
            className="App__button"
            aria-selected={selectedPage === pageName}
            data-page={pageName}
            onClick={handleSelect}
          >
            {pageName}
          </span>
        ))}
      </div>
      {selectedPage && <Page key={selectedPage} page={selectedPage} />}
    </div>
  );
}

export default App;

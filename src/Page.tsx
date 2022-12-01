import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Page.css";

type Props = {
  page: string;
};

function Page({ page }: Props) {
  const [text, setText] = useState<string>("");
  const $input = useRef<HTMLDivElement | null>(null);

  const handleTextChange = useCallback(
    (event: React.FormEvent<HTMLDivElement>) => {
      setText(event.currentTarget.innerText);
    },
    []
  );

  useEffect(() => {
    if (!$input.current) {
      return;
    }

    $input.current.focus();
  }, []);

  return (
    <div className="Page">
      <span className="Page__title">{page}</span>
      <span className="Page__title">{text}</span>
      <div
        ref={$input}
        className="Page__input"
        contentEditable
        onInput={handleTextChange}
      />
    </div>
  );
}

export default Page;

import React from "react";

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  descRef: React.RefObject<HTMLInputElement>;
}

const SearchingForm = ({ handleSubmit, descRef }: Props) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="descption">Use SPACE to input multiple keywords</label>
    <br />
    <div>
      <input id="descption" ref={descRef} placeholder="Job description..." />
      <button id="search" type="submit">
        Search
      </button>
    </div>
  </form>
);

export default SearchingForm;

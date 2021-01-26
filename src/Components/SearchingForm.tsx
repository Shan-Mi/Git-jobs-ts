import React from "react";

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  descRef: React.RefObject<HTMLInputElement>;
}

const SearchingForm = ({ handleSubmit, descRef }: Props) => (
  <div className=" flex items-center justify-center h-2/5 box-border">
    <form
      className="bg-red-200 p-10 rounded-md h-3/6 box-border flex flex-col justify-around -mt-10  hover:shadow-md"
      onSubmit={handleSubmit}>
      <label className="cursor-pointer" htmlFor="descption">
        Use <span className=" font-bold">SPACE</span> to input multiple keywords
      </label>
      <br />
      <div className="flex justify-between">
        <input
          className="rounded-md mr-1 px-2 focus:ring focus:ring-blue-300"
          id="descption"
          ref={descRef}
          placeholder="Job description..."
        />
        <button
          className="bg-blue-100 p-2 rounded-md hover:bg-blue-200 hover:text-gray-100"
          id="search"
          type="submit">
          Search
        </button>
      </div>
    </form>
  </div>
);

export default SearchingForm;

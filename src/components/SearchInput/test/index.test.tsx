import { fireEvent, render } from "@testing-library/react";
import SearchInput from "../";

const onChangeEvent = jest.fn();

describe("SearchInput suite", () => {
  it("should render the component correctly", () => {
    const { getByPlaceholderText } = render(
      <SearchInput onChange={onChangeEvent} />
    );

    const inputElement = getByPlaceholderText("Pesquise um livro");

    expect(inputElement).toBeDefined();
  });

  it("should onChange when value change", async () => {
    const { getByPlaceholderText } = render(
      <SearchInput onChange={onChangeEvent} />
    );
    const inputElement = getByPlaceholderText(/Pesquise um livro/i);
    fireEvent.change(inputElement, { target: { value: "Teste" } });

    expect(onChangeEvent).toHaveBeenCalledTimes(1);
  });
});

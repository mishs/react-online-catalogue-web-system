import { mount, configure } from "enzyme";
import { useContext } from "react";
import DealsContext from "./DealsContext";
import DealsState from "./DealsState";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { render, fireEvent } from "@testing-library/react";

describe("API call", () => {
  it("deals data", () => {
    const TestComponent = () => {
      const { applyFilter, filters } = useContext(DealsContext);

      return (
        <div>
          <div data-testid="value">{filters[0].checked.toString()}</div>
          <button data-testid="check" onClick={() => applyFilter(true, 0)}>check</button>
        </div>
      );
    };

    const { queryByTestId, queryByPlaceholderName } = render(
      <DealsState>
        <TestComponent />
      </DealsState>
    );

    expect(queryByTestId("value").textContent).toEqual("false")
    fireEvent.click(queryByTestId("check"))
    expect(queryByTestId("value").textContent).toEqual("true")
  });
});

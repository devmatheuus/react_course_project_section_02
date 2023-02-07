import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextInput } from '.';

describe("<TextInput/>", () => {
    it("should have a value of searchValue", () => {
        const fn = jest.fn();

        render(<TextInput handleChange={fn} searchValue={"testing..."} />);

        const input = screen.getByPlaceholderText(/type your search/i);

        expect(input.value).toBe("testing...");
    });

    it("should call handleChange function on each key pressed", () => {
        const fn = jest.fn();

        render(<TextInput handleChange={fn} searchValue={"any value"} />);

        const input = screen.getByPlaceholderText(/type your search/i);

        const value = "user value";

        userEvent.type(input, value);

        expect(input.value).toBe("any value");

        expect(fn).toBeCalledTimes(value.length);
    });

    it("should match snapshot", () => {
        const fn = jest.fn();
        const { container } = render(<TextInput handleChange={fn} searchValue={"any value"} />);

        expect(container.firstChild).toMatchSnapshot();
    });
});

import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { Home } from ".";

const handlers = [
    rest.get("*jsonplaceholder.typicode.com*", async (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    userId: 1,
                    id: 1,
                    title: "title1",
                    body: "body1",
                    url: "img1.jpg",
                },
                {
                    userId: 2,
                    id: 2,
                    title: "title2",
                    body: "body2",
                    url: "img2.jpg",
                },
                {
                    userId: 3,
                    id: 3,
                    title: "title3",
                    body: "body3",
                    url: "img3.jpg",
                },
            ]),
        );
    }),
];
const server = setupServer(...handlers);

describe("<Home/>", () => {
    beforeAll(() => server.listen());

    afterEach(() => server.resetHandlers());

    afterAll(() => server.close());

    it("should render search, posts and load more button", async () => {
        render(<Home />);

        const noPostsFound = screen.getByText("No posts found");
        await waitForElementToBeRemoved(noPostsFound);

        expect.assertions(3);

        const search = screen.getByPlaceholderText(/type your search/i);
        expect(search).toBeInTheDocument();

        const images = screen.getAllByRole("img", { name: /title/i });
        expect(images.length).toBe(2);

        const button = screen.getByRole("button", { name: /load more/i });
        expect(button).toBeInTheDocument();
    });
});

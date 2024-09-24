import { render, screen } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  beforeEach(() => {
    console.log("run before test");
  });

  beforeAll(() => {
    console.log("running once before all tests");
  });

  afterEach(() => {
    console.log("run after test");
  });

  afterAll(() => {
    console.log("running once after all tests");
  });

  test("should render first follower in followers list", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    // screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });

  test("should render first follower in followers list", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    // screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });

  test("should render first follower in followers list", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    // screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });

  //   test("should render first 5 followers in followers list", async () => {
  //     render(<MockFollowersList />);
  //     const followerDivElements = await screen.findAllByTestId(/follower-item/i);
  //     expect(followerDivElements.length).toBe(1);
  //   });
});

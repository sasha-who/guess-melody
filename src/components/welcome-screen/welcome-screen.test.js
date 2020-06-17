import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

const Settings = {
  ERRORS_COUNT: 3
};

it(`WelcomeScreen should render correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen errorsCount={Settings.ERRORS_COUNT} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

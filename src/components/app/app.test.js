import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const Settings = {
  ERRORS_COUNT: 3
};

it(`App should render correctly`, () => {
  const tree = renderer
    .create(
        <App
          errorsCount={Settings.ERRORS_COUNT}
          onWelcomeButtonClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

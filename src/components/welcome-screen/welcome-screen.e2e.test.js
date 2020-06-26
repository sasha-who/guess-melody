import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const Settings = {
  ERRORS_COUNT: 3
};

it(`WelcomeButton should be pressed`, () => {
  const onWelcomeButtonClick = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorsCount={Settings.ERRORS_COUNT}
        onWelcomeButtonClick={onWelcomeButtonClick}
      />
  );

  const welcomeButton = welcomeScreen.find(`.welcome__button`);

  welcomeButton.simulate(`click`);
  expect(onWelcomeButtonClick.mock.calls.length).toBe(1);
});

import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";
import { Link } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import isReact from "is-react";
import NavBar from "./components/NavBar/NavBar.jsx";

configure({ adapter: new Adapter() });
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('<NavBar/>', () => {
  let nav;
  beforeEach(() => {
    nav = shallow(<NavBar/>);
    expect(isReact.functionComponent(NavBar)).toBeTruthy();
  });

  it('Debería renderizar tres <Link/>. El primero que vaya a "/home",el segundo a "/" y el tercero que vaya a "/contact"', () => {
    expect(nav.find(Link).length).toBeGreaterThanOrEqual(3);
  });

  it('Debería tener un Link con el texto "Home" que cambie la ruta hacia "/home"', () => {
    expect(nav.find(Link).at(0).prop('to')).toEqual('/home');
  });

  it('Debería tener un Link con el texto "LANDING" que cambie la ruta hacia "/"', () => {
    expect(nav.find(Link).at(1).prop('to')).toEqual('/');
    expect(nav.find(Link).at(1).text()).toEqual('LANDING');
  });

});

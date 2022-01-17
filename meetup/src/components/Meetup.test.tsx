
import { render } from '@testing-library/react';
import { Meetup} from './Meetup';
import { mount } from 'enzyme';

describe("Test Meetup", () => {
  it("renders Meetup", () => {
    render(<Meetup />);
  })
  it("render the main div", () => {
    const wrapper = mount(<Meetup />)
    const mainDiv = wrapper.find('div')
    expect(mainDiv).toBeTruthy()
  })
  it("render a list", () => {
    const wrapper = mount(<Meetup />)
    const meetupsList = wrapper.find('li')
    expect(meetupsList.exists()).toBe(true)
  })
});
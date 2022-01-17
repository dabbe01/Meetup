
import {  mount } from 'enzyme';
import App from '../App';


describe("Should ", () => {
      it("A comment should pop out when you click on the button", () => {
        const wrapper = mount(<App />)
        const registerButton = wrapper.find('[data-test="Join-Event"]').at(0)
        registerButton.simulate('click')
        const input = wrapper.find('[data-test="meetup-input"]').at(0)
        const button = wrapper.find('[data-test="meetups-comment-btn"]')
        input.simulate('change', {target: {value: 'Test'} })
        button.simulate('click')
        const comment = wrapper.find('[data-test="comment-card"]')
        expect(comment.exists()).toBe(true)
      }),
      it("The description should hide when you click on the button", () => {
        const wrapper = mount(<App />)
        const hideButton = wrapper.find('[data-test="setHide"]').at(0)
        hideButton.simulate('change', {target: {value: 'true'} })
        expect(hideButton.exists()).toBe(true)
        
      })
});


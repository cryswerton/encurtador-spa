import { describe, it, expect, vitest } from 'vitest'

import { mount } from '@vue/test-utils'
import LoginView from '../../views/LoginView.vue'

describe('LoginView', () => {
    describe('Layout', () => {
        it('login header', () => {
          const wrapper = mount(LoginView)
          expect(wrapper.find('h1').isVisible())
          expect(wrapper.find('h1').text()).toBe('Login')
        })
        it('email input', () => {
            const wrapper = mount(LoginView)
            expect(wrapper.find('#email').isVisible())
        })
        it('input password type', () => {
            const wrapper = mount(LoginView)
            expect(wrapper.find('#email').attributes('type')).toBe('email')
        })
        it('email label', () => {
            const wrapper = mount(LoginView)
            const emailLabel = wrapper.find('#email-label')
            expect(emailLabel.isVisible())
            expect(emailLabel.text()).toBe('Email address')
        })
        it('password input', () => {
            const wrapper = mount(LoginView)
            expect(wrapper.find('#password').isVisible())
        })
        it('input password type', () => {
            const wrapper = mount(LoginView)
            expect(wrapper.find('#password').attributes('type')).toBe('password')
        })
        it('password label', () => {
            const wrapper = mount(LoginView)
            const passwordLabel = wrapper.find('#password-label')
            expect(passwordLabel.isVisible())
            expect(passwordLabel.text()).toBe('Password')
        })
        it('log in button', () => {
            const wrapper = mount(LoginView)
            const button = wrapper.find('#btn-login')
            expect(button.isVisible())
        })
        it('log in button text', () => {
            const wrapper = mount(LoginView)
            const button = wrapper.find('#btn-login')
            expect(button.text()).toBe('Log in')
        })
    })

    describe('Interactions', () => {
        it('logs in', async () => {
            const wrapper = mount(LoginView)
            wrapper.vm.login = vitest.fn();

            await wrapper.find('#btn-login').trigger('click');

            expect(wrapper.vm.login).toHaveBeenCalled();  
        })
    })
})

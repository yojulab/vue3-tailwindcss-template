import { shallowMount } from '@vue/test-utils';
import UserInfoView from './UserInfoView.vue';

describe('UserInfoView.vue', () => {
  it('유저 아이디를 보여주는 user-id-view가 생성됩니다.', () => {
    const wrapper = shallowMount(UserInfoView);
    const userInfoView = wrapper.get('[data-test="user-id-view"]');

    expect(userInfoView).toBeTruthy();
  });

  it('유저 비밀번호를 보여주는 user-pw-view가 생성됩니다.', () => {
    const wrapper = shallowMount(UserInfoView);
    const userInfoView = wrapper.get('[data-test="user-pw-view"]');

    expect(userInfoView).toBeTruthy();
  });
});

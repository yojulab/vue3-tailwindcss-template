import { shallowMount, mount } from '@vue/test-utils';
import { HomeIcon, ShoppingCartIcon, CogIcon } from '@heroicons/vue/solid';
import BottomNavigation from './BottomNavigation.vue';

describe('BottomNavigation.vue', () => {
  it('"메뉴" 부분에는 "홈", "장바구니", "설정" 아이콘들이 존재합니다.', () => {
    const wrapper = mount(BottomNavigation);
    const homeIcon = wrapper.findComponent(HomeIcon);
    const shoppingCartIcon = wrapper.findComponent(ShoppingCartIcon);
    const cogIcon = wrapper.findComponent(CogIcon);

    expect(homeIcon.exists()).toBe(true);
    expect(shoppingCartIcon.exists()).toBe(true);
    expect(cogIcon.exists()).toBe(true);
  });

  it('Nav 영역은 최하단에 고정되어 있어야 합니다.', () => {
    const wrapper = shallowMount(BottomNavigation);
    const bottomNavigation = wrapper.get('[data-test="bottom-navigation"]');

    expect(bottomNavigation.classes()).toContain('fixed', 'bottom-0');
  });

  it('각 아이콘들을 수평 방향으로 균등하게 배치가 되어야 합니다.', () => {
    const wrapper = shallowMount(BottomNavigation);
    const bottomNavigation = wrapper.get('[data-test="button-wrap"]');

    expect(bottomNavigation.classes()).toContain('flex', 'justify-between');
  });
});

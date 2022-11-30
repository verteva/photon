// write unit tests for List component vue-test-utils

import ListItem from './ListItem.vue';
import { createWrapper } from '@/utils/unitTest';

describe('Atoms/ListItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = createWrapper(ListItem);
  });

  it('prop: list style circle', async () => {
    const listItemElem = wrapper.find('.ph-item-list');

    expect(listItemElem.html()).toContain('Slot Content');
  });
});

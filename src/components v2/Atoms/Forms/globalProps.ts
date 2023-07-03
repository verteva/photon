import { PropType } from 'vue';
import {
  FORM_CONTROL_SIZE,
  FORM_CONTROL_SIZE_TYPE,
} from '@/utils/constants/FormControlConstants';
import validators from '@/utils/validators';
import '@/utils/fontAwesome/setup';

export const formProps = {
  size: {
    type: String as PropType<FORM_CONTROL_SIZE_TYPE>,
    default: FORM_CONTROL_SIZE.MEDIUM,
    validator: validators.includes(Object.values(FORM_CONTROL_SIZE)),
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
};

import type { SelectDesignTokens } from '@primeuix/themes/types/select';
import type { SelectPassThroughOptions, SelectProps } from 'primevue';
import type { RendererElement, RendererNode, VNode } from 'vue';
import { selectArrow } from '@/assets/icons';

export const selectConfig = (): SelectDesignTokens => {
  return {
    root: {
      paddingY: 'calc({formField.paddingY} + .4rem)',
      sm: {
        paddingY: 'calc({formField.sm.paddingY} + .3rem)',
      },
      lg: {
        paddingY: 'calc({formField.lg.paddingY} + .4rem)',
      },
    },

    dropdown: {
      width: '2em',
    },

    list: {
      padding: '0',
    },
    option: {
      padding: '1rem',
    },

    colorScheme: {
      light: {
        option: {
          color: 'var(--black)',
          focusColor: 'var(--black)',
          selectedColor: 'var(--primary-surface-color)',
          selectedFocusColor: 'var(--primary-surface-color)',
          focusBackground: 'var(--secondary-600)',
          selectedBackground: 'var(--primary-500)',
          selectedFocusBackground: 'var(--primary-500)',
        },
      },
      dark: {
        option: {
          color: 'var(--white)',
        },
      },
    },
  };
};

export const selectPt = (instance?: VNode<RendererNode, RendererElement, SelectProps>): SelectPassThroughOptions => {
  return {
    dropdown: {
      innerHTML: selectArrow,
    },
    root: {
      class: (!instance || !instance.props?.size) ? 'font-16-b' : instance.props.size === 'small' ? 'font-12-r' : 'font-18-b',
    },
    label: {
      class: (!instance || !instance.props?.size) ? 'font-16-b' : instance.props.size === 'small' ? 'font-12-r' : 'font-18-b',
    },
    option: {
      class: (!instance || !instance.props?.size) ? 'font-16-b' : instance.props.size === 'small' ? 'font-12-r' : 'font-18-b',
    },
  };
};

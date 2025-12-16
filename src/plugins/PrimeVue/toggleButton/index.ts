import type { ToggleButtonDesignTokens } from '@primeuix/themes/types/togglebutton';
import type { ToggleButtonPassThroughOptions, ToggleButtonProps } from 'primevue';
import type { RendererElement, RendererNode, VNode } from 'vue';

export const toggleButtonConfig = (): ToggleButtonDesignTokens => {
  return {
    root: {
      padding: '.5rem',
      sm: { padding: '.4rem' },
      lg: { padding: '.6rem' },
    },
    content: {
      borderRadius: '{formField.borderRadius}',
      padding: '1.2rem 3rem',
      sm: { padding: '0.6rem 2rem' },
      lg: { padding: '1.8rem 4rem' },
    },

    colorScheme: {
      light: {
        root: {
          color: '{surface.800}',
          hoverColor: '{surface.950}',
          checkedColor: '{formField.color}',

          background: 'rgba(241, 245, 249, 1)',
          hoverBackground: 'rgba(241, 245, 249, 1)',
          checkedBackground: 'rgba(241, 245, 249, 1)',

          borderColor: 'transparent',
          checkedBorderColor: 'transparent',
        },
        content: {
          checkedBackground: '{surface.100}',
        },
      },
      dark: {
        root: {
          color: '{surface.400}',
          hoverColor: '{surface.100}',
          checkedColor: '{formField.color}',

          borderColor: 'transparent',
          checkedBorderColor: 'transparent',
          background: '{formField.background}',
          hoverBackground: '{formField.background}',
          checkedBackground: '{formField.background}',
        },
        content: {
          checkedBackground: '{surface.600}',
        },
      },
    },
  };
};

export const toggleButtonPt = (instance?: VNode<RendererNode, RendererElement, ToggleButtonProps>): ToggleButtonPassThroughOptions => {
  return {
    root: {
      class: (!instance || !instance.props?.size) ? 'font-16-r' : instance.props.size === 'small' ? 'font-14-r' : 'font-18-b',
    },
  };
};

import type { InputTextPassThroughOptionType, InputTextProps } from 'primevue';
import type { RendererElement, RendererNode, VNode } from 'vue';

export const inputFieldPt = (instance?: VNode<RendererNode, RendererElement, InputTextProps>): InputTextPassThroughOptionType => {
  return {
    root: {
      class: (!instance || !instance.props?.size) ? 'font-16-b' : instance.props.size === 'small' ? 'font-12-r' : 'font-18-b',
    },
  };
};

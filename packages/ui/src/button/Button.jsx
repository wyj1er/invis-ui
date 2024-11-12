import { defineComponent } from 'vue'
import 'virtual:uno.css'
// eslint-disable-next-line import/no-mutable-exports, no-var
export var buttonProps = {
  // 颜色
  color: {
    type: String,
    default: 'blue',
  },
  /**
   * 尺寸
   * @example 'small' | 'medium' | 'large'
   */
  size: {
    type: String,
    default: 'medium',
  },
  // 是否圆角
  round: {
    type: Boolean,
    default: false,
  },
  // 是否扁平
  plain: {
    type: Boolean,
    default: false,
  },
  // 图标
  icon: {
    type: String,
    default: '',
  },
}
export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props, _a) {
    const slots = _a.slots
    const size = {
      small: {
        x: '2',
        y: '1',
        text: 'sm',
      },
      medium: {
        x: '3',
        y: '1.5',
        text: 'base',
      },
      large: {
        x: '4',
        y: '2',
        text: 'lg',
      },
    }

    return function () {
      return (
        <button class={'\n          py-'.concat(size[props.size].y, '\n          px-').concat(size[props.size].x, '\n          ').concat(props.round ? 'rounded-full' : 'rounded-lg', '\n          bg-').concat(props.color, '-').concat(props.plain ? '100' : '500', '\n          hover:bg-').concat(props.color, '-400\n          border-').concat(props.color, '-').concat(props.plain ? '500' : '500', '\n          cursor-pointer\n          border-solid\n          text-').concat(props.plain ? ''.concat(props.color, '-500') : 'white', '\n          text-').concat(size[props.size].text, '\n          hover:text-white\n          transition duration-300 ease-in-out transform hover:scale-105\n          mx-1\n          ')}>
          {props.icon !== ''
            ? (<i class={'i-ic-baseline-'.concat(props.icon, ' p-3')}></i>)
            : ('')}
          {slots.default ? slots.default() : ''}
        </button>
      )
    }
  },
})

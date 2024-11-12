import { defineComponent } from 'vue';
import 'virtual:uno.css';
export var linkProps = {
    size: {
        type: String,
        default: 'medium',
    },
    color: {
        type: String,
        default: 'purple',
    },
};
export default defineComponent({
    name: 'Link',
    props: linkProps,
    setup: function (props, _a) {
        var slots = _a.slots;
        var size = {
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
        };
        return function () { return (<a class={" \n              hover:text-white\n              cursor-pointer\n              py-".concat(size[props.size].y, "\n              px-").concat(size[props.size].x, "\n              text-").concat("".concat(props.color, "-500"), "\n              text-").concat(size[props.size].text, "\n              hover:bg-").concat(props.color, "-400\n              ")}>
        <span>
          {' '}
          {slots.default ? slots.default() : '默认链接'}
          {' '}
        </span>
      </a>); };
    },
});

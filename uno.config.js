import { defineConfig, presetAttributify, presetIcons, presetUno, transformerAttributifyJsx, transformerDirectives, transformerVariantGroup } from 'unocss'

const __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
  if (pack || arguments.length === 2) {
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) { ar = Array.prototype.slice.call(from, 0, i) }
        ar[i] = from[i]
      }
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from))
}

const colors = [
  'white',
  'black',
  'gray',
  'red',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink',
]
const safelist = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], colors.map((v) => { return 'bg-'.concat(v, '-100') }), true), colors.map((v) => { return 'bg-'.concat(v, '-400') }), true), colors.map((v) => { return 'bg-'.concat(v, '-500') }), true), colors.map((v) => { return 'hover:bg-'.concat(v, '-100') }), true), colors.map((v) => { return 'hover:bg-'.concat(v, '-300') }), true), colors.map((v) => { return 'hover:bg-'.concat(v, '-400') }), true), colors.map((v) => { return 'hover:bg-'.concat(v, '-500') }), true), colors.map((v) => { return 'border-'.concat(v, '-400') }), true), colors.map((v) => { return 'border-'.concat(v, '-500') }), true), colors.map((v) => { return 'text-'.concat(v, '-500') }), true), colors.map((v) => { return 'hover:text-'.concat(v, '-500') }), true), [
  'text-white',
], false), Array.from({ length: 8 }, (_, i) => { return 'px-'.concat(i + 1) }), true), Array.from({ length: 8 }, (_, i) => { return 'py-'.concat(i + 1) }), true), ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'].map((v) => { return 'text-'.concat(v) }), true), ['rounded-full', 'rounded-lg'], false), [
  'search',
  'edit',
  'check',
  'message',
  'star',
  'delete',
  'add',
  'share',
].map((v) => { return 'i-ic-baseline-'.concat(v) }), true)
export default defineConfig({
  safelist,
  presets: [presetAttributify({}), presetUno(), presetIcons({ warn: true })],
  transformers: [
    transformerDirectives(),
    transformerAttributifyJsx(),
    transformerVariantGroup(),
  ],
})

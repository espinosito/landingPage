export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as AboutMe } from '../../components/aboutMe.vue'
export { default as Landing } from '../../components/landing.vue'
export { default as UIDarkLightMode } from '../../components/UI/darkLightMode.vue'
export { default as LayoutsIndexHeader } from '../../components/layouts/index/header.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

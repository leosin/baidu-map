import { shallowMount } from '@vue/test-utils'
import scale from './scale.vue'
import { addScaleControl } from '../../lib/control'

const control = {}
jest.mock('../../lib/control', () => ({
    addScaleControl: jest.fn(() => control)
}))

test('test Map', async () => {
    let onReady = () => { }
    const wrapper = shallowMount(scale, {
        global: {
            provide: {
                map: {
                    value: {}
                }
            }
        },
        slots: {},
        props: {
            onReady: onReady
        }
    })
    expect(wrapper.props()).toEqual({
        map: null,
        anchor: 0,
        offset: [50, 80],
        show: true,
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(addScaleControl).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].bmobj).toEqual(control)
})
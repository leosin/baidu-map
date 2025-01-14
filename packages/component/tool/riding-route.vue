<template>
    <div ref="container">
        <slot v-bind:points="points"></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, ref, useAttrs, watch } from 'vue'
import { BMapGLRef } from '../../lib/map'
import { addRidingRoute } from '../../lib/tool'
import { bindEvents, extractEmitEvents } from '../../utils/util'
const props = withDefaults(
    defineProps<{
        map?: BMapGL.Map | null
        location?:
            | string
            | {
                  lat: number
                  lng: number
              }
            | Object
        start?:
            | {
                  lat: number
                  lng: number
              }
            | Object
        end?:
            | {
                  lat: number
                  lng: number
              }
            | Object
        renderOptions?: {
            map?: Object
            panel?: string | HTMLElement
            selectFirstResult?: boolean
            autoViewport?: boolean
        }
        onSearchComplete?: Function
        onMarkersSet?: Function
        onInfoHtmlSet?: Function
        onPolylinesSet?: Function
        onResultsHtmlSet?: Function
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        location: undefined,
        start: undefined,
        end: undefined,
        renderOptions: undefined,
        onSearchComplete: () => {},
        onMarkersSet: () => {},
        onInfoHtmlSet: () => {},
        onPolylinesSet: () => {},
        onResultsHtmlSet: () => {},
        show: true,
        onReady: (el: any) => {},
    }
)
const emit = defineEmits({})
const attrs = useAttrs()
const isShow = computed(() => currentMap.value && props.show)
const options = computed(() => props)
const bm = ref<BMapGL.RidingRoute | null>()
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
watch(
    () => isShow.value,
    val => {
        let merge_props = { ...options.value }
        if (val) {
            // 自定义选择路线结果
            merge_props.onSearchComplete = async function (e: BMapGL.RidingRouteResult) {
                if (typeof props.onSearchComplete === 'function') {
                    let result = await Promise.resolve(props.onSearchComplete(bm.value, e))
                    points.value = result.points
                } else {
                    // 默认选择第一条路线
                    var arrPois = [] as BMapGL.Point[]
                    if (bm.value?.getStatus() == 0) {
                        var plan = e.getPlan(0)
                        for (var j = 0; j < plan.getNumRoutes(); j++) {
                            var route = plan.getRoute(j)
                            arrPois = arrPois.concat(route.getPath())
                        }
                    }
                    points.value = arrPois
                }
            }
            bm.value = bindEvents(addRidingRoute(currentMap.value, merge_props), extractEmitEvents(attrs), emit)
            emit('ready', {
                bmobj: bm.value,
                search: () => {
                    if (BMapGLRef.value && bm.value) {
                        let start = props.start
                        let end = props.end
                        if ('lng' in props.start && 'lat' in props.start) {
                            start = new BMapGLRef.value.Point(props.start.lng, props.start.lat)
                        }
                        if ('lng' in props.end && 'lat' in props.end) {
                            end = new BMapGLRef.value.Point(props.end.lng, props.end.lat)
                        }
                        bm.value.search(start as any, end as any)
                    }
                },
            })
        } else {
            bm.value && bm.value.clearResults()
            bm.value = null
        }
    },
    {
        immediate: true,
    }
)
const points = ref<BMapGL.Point[]>([])
onUnmounted(() => {
    bm.value && bm.value.clearResults()
    bm.value = null
})
defineExpose({
    search: () => {
        if (BMapGLRef.value && bm.value) {
            let start = props.start
            let end = props.end
            if ('lng' in props.start && 'lat' in props.start) {
                start = new BMapGLRef.value.Point(props.start.lng, props.start.lat)
            }
            if ('lng' in props.end && 'lat' in props.end) {
                end = new BMapGLRef.value.Point(props.end.lng, props.end.lat)
            }
            bm.value.search(start as any, end as any)
        }
    },
})
</script>
<script lang="ts">
export default {
    name: 'RidingRoute',
}
</script>

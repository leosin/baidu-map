declare namespace BmComponent {
    interface BmScaleControlProps {
        /**
         * 控件停靠位置
         */
        anchor?: BMapGL.ControlAnchor
        /**
         * 控件偏移量
         */
        offset?: [number, number]
        /**
         * 是否显示
         */
        show?: boolean
    }
}
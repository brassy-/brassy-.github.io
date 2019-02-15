import { Data, animate, Override, Animatable } from "framer"

const data = Data({ toggle: true, scale: Animatable(1), opacity: Animatable(1), rotation: Animatable(0), rotationY: Animatable(0) })

export const Fade: Override = props => {
    data.opacity.set(props.opacity)

    return {
        opacity: data.opacity,
        onTap() {
            animate.linear(data.opacity, 1, 0.2)
        },
    }
}
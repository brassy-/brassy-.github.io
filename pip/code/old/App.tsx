import { Data, animate, Override, Animatable } from "framer"

const data = Data({left: Animatable(798), opacity: Animatable(1) })
let toggle = false

setTimeout(function(){
    animate.easeInOut(data.left, 885, {duration: 0.5});
    toggle = false;
    }, 3000)


setTimeout(function(){
    animate.easeInOut(data.opacity, 0, {duration: 1}); 
    toggle = false;
    }, 7000)

export const onOver: Override = () => {
    return {
        left: data.left,
        opacity: data.opacity

        onTap() {
            if(toggle){
                animate.easeInOut(data.left, , {duration: 0.5});
                toggle = false;
            } else {
                animate.easeInOut(data.left, 885, {duration: 0.5});
                toggle = true;
            }           
        }
    }
}
import * as React from "react"
import { PropertyControls, ControlType, animate, Override, Animatable } from "framer"
import { PiPlabel } from "./canvas"

//const data = Data({left: Animatable(798), opacity: Animatable(1)})
let isControlVisible = true


export const init: Override = () => {
   

    const toggleController = function() {
        if (isControlVisible) {
            PiPlabel.prototype.setState({
                opacity: 0
              })
          
            isControlVisible = false
        }  else {
            console.log(PiPlabel)
            isControlVisible = true
        }     
    }


    return {
        onMouseEnter() {
            toggleController()
        }
    }
}
import React from 'react'
import { swiffyslider } from 'swiffy-slider'
import "swiffy-slider/css"


// import Swiffy Slider CSS


const Slider = () => {
    window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
    window.swiffyslider.init();
});
  return (
    <div>
        <div class="swiffy-slider slider-item-show4 slider-item-ratio slider-item-ratio-1x1 slider-nav-round slider-nav-sm slider-nav-outside slider-nav-visible slider-nav-autohide slider-item-first-visible slider-nav-page slider-indicators-round slider-indicators-outside">
            <ul class="slider-container" style="">
                <li>
                    <div id="slide1">h</div>
                </li>
                <li>
                    <div id="slide2">ki</div>
                </li>
                <li>
                    <div id="slide3">kjn</div>
                </li>
                <li>
                    <div id="slide4"></div>
                </li>
                <li>
                    <div id="slide5"></div>
                </li>
                <li>
                    <div id="slide6"></div>
                </li>
                <li>
                    <div id="slide7"></div>
                </li>
                <li>
                    <div id="slide8"></div>
                </li>
                <li>
                    <div id="slide9"></div>
                </li>
            </ul>

            <button type="button" class="slider-nav"></button>
            <button type="button" class="slider-nav slider-nav-next"></button>

            {/* <ul class="slider-indicators">
                <li class="active"></li>
                <li class=""></li>
                <li class=""></li>
                <li class=""></li>
                <li class=""></li>
                <li class=""></li>
                <li class=""></li>
                <li></li>
                <li class=""></li>
            </ul> */}
        </div>
    </div>
  )
}

export default Slider
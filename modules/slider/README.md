Slider
======

Slider component that can be used with a slider plugin such as Slick.

### Settings

- `$slider-nav-gutter`
- `$slider-pager-bottom-margin`
- `$slider-pager-item-width`
- `$slider-pager-item-height`
- `$slider-pager-item-margin`
- `$slider-pager-item-padding`
- `$slider-bp-hidden`


Usage
-----

    <div class="slider">
        <div class="slider_nav">
            <div class="slider_nav_prev"><a href="#"><img src="/layout/images/slider-arrow-prev.png"></a></div>
            <div class="slider_nav_next"><a href="#"><img src="/layout/images/slider-arrow-next.png"></a></div>
        </div>
        <div class="slider_pager">
            <a href="#" class="slider_pager_item -is-current"></a>
            <a href="#" class="slider_pager_item"></a>
            <a href="#" class="slider_pager_item"></a>
        </div>
        <div class="slider_slide"><img src="https://unsplash.it/1200/600/?blur"></div>
        <div class="slider_slide" style="display: none;"><img src="https://unsplash.it/1200/600/?random"></div>
        <div class="slider_slide" style="display: none;"><img src="https://unsplash.it/1200/600/?random"></div>
    </div>




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

    <div class="Slider">
        <div class="Slider-nav">
            <div class="Slider-nav-prev"><a href="#"><img src="/layout/images/slider-arrow-prev.png"></a></div>
            <div class="Slider-nav-next"><a href="#"><img src="/layout/images/slider-arrow-next.png"></a></div>
        </div>
        <div class="Slider-pager">
            <a href="#" class="Slider-pager-item is-current"></a>
            <a href="#" class="Slider-pager-item"></a>
            <a href="#" class="Slider-pager-item"></a>
        </div>
        <div class="Slider-slide"><img src="https://unsplash.it/1200/600/?blur"></div>
        <div class="Slider-slide" style="display: none;"><img src="https://unsplash.it/1200/600/?random"></div>
        <div class="Slider-slide" style="display: none;"><img src="https://unsplash.it/1200/600/?random"></div>
    </div>




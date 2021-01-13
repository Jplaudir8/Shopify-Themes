$(document).ready(function() {

    $(document).on('change', '#variant-id', function(){
        let 
            variant_id = this.value,
            variant_image = $('.single-product-image[data-variant="'+variant_id+'"]'); // Take div with class of single-product-image with the data-variant attribute set to the reqired variant id

        variant_image.show().siblings(':visible').hide();
    })

});
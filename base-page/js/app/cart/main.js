define(['./product', './title'], function(pdc, tt) {
    //obj
    dwn("<--pdc.js-->");
    dwn(pdc.color);
    //cart
    dwn("<--title.js-->")
    dwn(tt.title);

    function dwn(ct) {
        document.write(ct + "<BR />");
    }
    return {
        title: tt.title,
        prodcut: pdc,
        total: function(num) {
            return this.pdc.price * num;
        }
    }
})

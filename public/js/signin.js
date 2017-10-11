'use strict';

/**
 * [readURL :Read image data]
 * @param  {[file]} input [description]
 * @return {[type]}       [description]
 */
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#image_upload_preview').removeClass('hide').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

(function () {
    var _this = this;

    // Picture change event on signup page
    $("#signup-pic").on("change", function () {
        return readURL(_this);
    });

    $("a.switchVisibility").on("click", function () {
        var $this = $(_this),
            ref = $this.data('ref');
        activeClass = $('div.' + ref);
        activeClass.removeClass('hide').addClass('animated flipInY').delay(3000).removeClass('flipOutY');
        activeClass.siblings('div.auth-wrap').addClass('animated flipOutY').delay(3000).addClass('hide').removeClass('flipInY');
    });

    /**
     * [Spinner on Login click]
     */
    $('.mm-btn').on("click", function () {
        var $this = $(_this);
        var preloader = $this.data('preloader') ? $this.data('preloader') : 'teal';
        var setText = $this.data('text') ? $this.data('text') : $this.text();
        var setIcon = $this.data('icon') ? $this.data('icon') : '';
        var iconPos = $this.data('iconPos') && setIcon != '' ? $this.data('iconPos') : 'right';
        var redirectionPoint = $this.data('redirection') ? $this.data('redirection') : '';
        $this.text('');
        var setHtml = '<div class="preloader-wrapper small active">\n\t\t\t\t<div class="spinner-layer spinner-' + preloader + '-only">\n\t\t\t\t\t<div class="circle-clipper left">\n\t\t\t\t\t\t<div class="circle"></div>\n\t\t\t\t\t</div><div class="gap-patch">\n\t\t\t\t\t\t<div class="circle"></div>\n\t\t\t\t\t</div><div class="circle-clipper right">\n\t\t\t\t\t\t<div class="circle"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>';
        $this.addClass('btn-floating white').html(setHtml);
        setTimeout(function () {
            if (setIcon != '') {
                var textCont = setText + ' <i class="material-icons white-text ' + iconPos + '">' + setIcon + '</i>';
                $this.removeClass('btn-floating white').empty().html(textCont);
            } else {
                $this.removeClass('btn-floating white').empty().text(setText);
            }
            if (redirectionPoint != '') {
                window.location.href = "./index.html";
            }
        }, 5000);
    });

    // Confirm Password HTML 5 Validations
    var password = document.getElementById("sign-password"),
        confirm_password = document.getElementById("confirmpassword");

    /**
     * [validatePassword : match password (Confirm Password)]
     */
    function validatePassword() {
        if (password.value != confirm_password.value) {
            confirm_password.setCustomValidity("Passwords Don't Match");
        } else {
            confirm_password.setCustomValidity('');
        }
    }

    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;
})();
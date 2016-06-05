;(function ($, window, document, undefined) {
    'use strict';

    var methods = {
        init: function (options) {
            var self = this,
                opt = $.extend(true, {}, $.fn.card.defaults, options);

            var backgroundColor = (typeof opt.background_color == 'undefined') ? 'transparent' : opt.background_color,
                input = $('<input>').attr({
                    type: 'text',
                    placeholder: opt.placeholder,
                    size: opt.placeholder.length,
                    maxlength: opt.placeholder.length,
                    class: 'jquery-card-input__input',
                    style: 'border-color:' + backgroundColor
                }),
                img = $('<img>').attr({
                    src: opt.src,
                    alt: 'partners'
                });

            $(self).addClass('jquery-card-input')
                .attr({'data-card-valid': false})
                .append($('<div>')
                        .addClass('jquery-card-input__prefix-card')
                        .attr({style: 'border-color:' + backgroundColor})
                        .html(opt.prefix),
                    input,
                    $('<div>').addClass('jquery-card-input__logo-partners')
                        .attr({'style': 'background:' + backgroundColor + '; border-color:' + backgroundColor})
                        .html(img),
                    $('<input>').attr({type: 'hidden', name: opt.name})
                );


            /**
             * Format as XX XXXX XXXX
             * @param event
             * @returns {boolean}
             */
            function cardNumberFormat(event) {
                var evt = (event) ? event : window.event,
                    charCode = (evt.which) ? evt.which : evt.keyCode;

                if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                    return false;
                }

                var str = event.target.value.trim().replace(/\s+/g, "");

                if (str.length === opt.placeholder.trim().replace(/\s+/g, "").length) {
                    event.target.value = str.replace(/(\d{2})(\d{4})(\d{4})/, "$1 $2 $3");
                }

                return true;
            }

            /**
             * Check number card
             * @param event
             */
            function cardNumberCheck(event) {
                if (event.target.value.length != 0 && event.target.value.length < opt.placeholder.length) {
                    $(self).addClass('jquery-card-input--error');
                    $(self).attr('data-card-valid', false);
                    $(self).find('[name=' + opt.name + ']').val('');
                } else {
                    $(self).removeClass('jquery-card-input--error');
                    $(self).attr('data-card-valid', true);

                    var val = $(self).find('.jquery-card-input__input').val().trim().replace(/\s+/g, "");
                    $(self).find('[name=' + opt.name + ']').val(opt.prefix.replace(/\s+/g, "") + val)
                }
            }

            $(this).find('.jquery-card-input__prefix-card').on('click', function () {
                $(self).find('.jquery-card-input__input').focus();
            });
            $(this).find('.jquery-card-input__input').on('keypress keyup input', cardNumberFormat);
            $(this).find('.jquery-card-input__input').on('focusout', cardNumberCheck);

        }
    }

    $.fn.card = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist!');
        }
    };

    $.fn.card.defaults = {
        cancel: false
    };

})(jQuery, window, document);
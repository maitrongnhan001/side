$(document).ready(() => {
    $("#btn-1").click(() => {
        const id_element = $("#btn-1").attr("id");
        const current_forcus_element = $('.slider-control').find('.forcus');
        current_forcus_element.removeClass('forcus');
        $(`#${id_element}`).addClass('forcus');

        //hide all img
        $(".my-slides").addClass('hide');

        //show image choose
        const position_img_element = id_element[id_element.length - 1];
        const id_img = `img-${position_img_element}`;
        $(`#${id_img}`).removeClass("hide");
    });

    $("#btn-2").click(() => {
        const id_element = $("#btn-2").attr("id");
        const current_forcus_element = $('.slider-control').find('.forcus');
        current_forcus_element.removeClass('forcus');
        $(`#${id_element}`).addClass('forcus');

        //hide all img
        $(".my-slides").addClass('hide');

         //show image choose
        const position_img_element = id_element[id_element.length - 1];
        const id_img = `img-${position_img_element}`;
        $(`#${id_img}`).removeClass("hide");
    });

    $("#btn-3").click(() => {
        const id_element = $("#btn-3").attr("id");
        const current_forcus_element = $('.slider-control').find('.forcus');
        current_forcus_element.removeClass('forcus');
        $(`#${id_element}`).addClass('forcus');

        //hide all img
        $(".my-slides").addClass('hide');

         //show image choose
        const position_img_element = id_element[id_element.length - 1];
        const id_img = `img-${position_img_element}`;
        $(`#${id_img}`).removeClass("hide");
    });
});
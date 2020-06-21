toggleAnnouncementsModal();
// Notification Modal
$("#minimize-btn").click(function () {
    $(".notification-modal-class").toggleClass("d-none");
});

//on load minimize notification modal
$("#minimize-btn").click();

function toggleAnnouncementsModal() {
    $("#notification-modal-dialog").toggleClass("d-none");
}

window.addEventListener("resize", function () {
    width = $(window).width()
    if (width <= 992) {
        $('#chatModal .close').click()
    }
});
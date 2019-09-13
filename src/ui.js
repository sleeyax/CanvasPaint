function updateUI() {
    let icon = '<a href="#" class="ic-DashboardCard__action announcements changeCoverButton" title="Change cover image">';
    icon += '<span class="screenreader-only">Change cover image</span>';
    icon += '<div class="ic-DashboardCard__action-layout">' + GM_getResourceText('edit_icon') + '</div>';
    icon += '</a>';
    onLoaded((target) => {
        $(target).each(function() {
            $(this).append(icon);
        });
        $('.changeCoverButton').on('click', showChangeCoverPopup);
    });
}

function onLoaded(cb) {
    const target = '.ic-DashboardCard__action-container';
    let waiter = setInterval(() => {
        if ($(target).length > 0) {
            clearInterval(waiter);
            cb(target);
        }
    }, 2000);
}

function showChangeCoverPopup() {
    const url = prompt('Enter image URL');
    if (url == null || url == '') return;
    changeCover(url, $(this).parent().parent());
}

function changeCover(url, canvas) {
    $(canvas).find('.ic-DashboardCard__header_image').attr('style', 'background-image: url("' + url + '") !important;')
    GM_setValue($(canvas).attr('aria-label'), url);
}
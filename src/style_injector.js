function injectCss(options) {
    const keys = GM_listValues();
    let style = '';
    keys.forEach(key => {
        const target = '.ic-DashboardCard[aria-label="' + key + '"]';
        style += target + ' .ic-DashboardCard__header_image {';
        style += 'background-image: url("' + GM_getValue(key, '') +'") !important;';
        style += '}';
        if (options && options.disableColorOverlay)
            style += target + ' .ic-DashboardCard__header_hero {background: none !important;}';
    });
    if (style != '') GM_addStyle(style);
}
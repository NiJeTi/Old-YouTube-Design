const url = window.location.href;

if (url.indexOf('disable_polymer=true') === -1) {
    const urlParams = ((url.indexOf('?') === -1) ? '?' : '&') + 'disable_polymer=true';

    window.location.href = url.replace(urlParams, '') + urlParams;
}

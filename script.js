    var url = window.location.href;
    if(url.indexOf("disable_polymer=true") == -1)
    {
        separator = (url.indexOf("?") === -1) ? "?": "&";
        newParam = separator + "disable_polymer=true";
        newUrl = url.replace(newParam, "");
        newUrl += newParam;
        window.location.href = newUrl;
    }
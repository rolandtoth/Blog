/*jshint esversion: 6 */
var scriptsDir = "/assets/scripts/",
    disqus_loaded = false;

var init = function () {
    initDisqus();
    initSyntaxHighlight();
    initCopyToClipboard("pre > code", "Copy to clipboard");
    initFilterBox();
};

document.addEventListener("DOMContentLoaded", init);

function initDisqus() {
    var $loadCommentsBtn = document.getElementById("load-comments-btn");

    if (!$loadCommentsBtn) return false;

    if (document.location.hash === "#comments") {
        loadComments();
    } else {
        $loadCommentsBtn.addEventListener("click", function () {
            return loadComments();
        });
    }

    document.getElementById("scroll-to-comments").addEventListener("click", function () {
        return loadComments();
    });

    function loadComments() {
        disqus(window.disqusShortName, window.legacyURL, window.disqusID);
    }
}

function initCopyToClipboard(selector, text) {
    var $targets,
        $btn,
        btnClass = "copy-to-clipboard",
        successClass = "copy-success",
        title = "Copy";

    if (!selector) return false;

    $targets = document.querySelectorAll(selector);

    if (!$targets.length) return;

    $btn = document.createElement("button");
    $btn.className = btnClass;
    $btn.innerHTML = "<span>" + text + "</span>";
    $btn.title = title;

    for (var i = 0; i < $targets.length; i++) {
        var $target = $targets[i];

        $target.parentElement.insertBefore($btn.cloneNode(true), $target);
    }

    [].forEach.call(document.querySelectorAll("." + btnClass), function (el) {
        el.addEventListener("click", function (e) {
            copyContentToClipboard(e.target.parentElement.querySelector("code"));
            el.classList.add(successClass);
            setTimeout(function () {
                if (el) {
                    el.classList.remove(successClass);
                }
            }, 1000);
        });
    });
}

function initSyntaxHighlight() {
    loadAsset(scriptsDir + 'highlight/styles/default.css?selector="pre code"&async=false', function () {
        loadAsset(scriptsDir + 'highlight/highlight.pack.js?async=false', function () {
            loadAsset(scriptsDir + 'highlight/highlightjs-line-numbers.min.js?async=false', function () {
                setTimeout(function () {
                    document.querySelectorAll("pre code").forEach(function (block) {
                        hljs.highlightBlock(block);
                        hljs.lineNumbersBlock(block, {
                            singleLine: false
                        });
                    });
                }, 0);
            });
        });
    });
}

function initFilterBox() {
    if (document.querySelector("#fbx0")) {
        return;
    }

    addFilterBox({
        target: {
            selector: ".post-list",
            items: "li"
        },
        input: {
            label: "<span class='icono-search'></span>",
            attrs: {
                placeholder: "Search posts...",
                autocomplete: "off"
            }
        },
        addTo: {
            selector: ".post-list",
            position: "before"
        },
        displays: {
            // submitButton: {
            //     tag: "button",
            //     attrs: {
            //         style: "position: fixed; z-index: 3333; top: 16px; right: 600px;",
            //         onclick: "var input = this.parentElement.querySelector('input'); input.getFilterBox().filter(input.value, true); input.focus();"
            //     },
            //     text: "Filter posts",
            //     showIf: function () {
            //         return this.getSettings().autoFilter === false;
            //     }
            // },
            counter: {
                tag: "span",
                addTo: {
                    selector: ".post-list",
                    position: "after"
                },
                attrs: {
                    class: "search-counter"
                },
                text: function () {
                    var text = "";

                    if (this.getFilter() !== "") {
                        text = !this.countVisible() ? "No posts" : "Found " + this.countVisible() + " of " + this.countTotal() + " posts";
                    }

                    return text;
                }
            }
        },
        callbacks: {
            onEnter: function () {
                var $item = this.getSelectedItem();
                if ($item) {
                    $item.querySelector("a").click();
                }
            },
            onBlur: function (e) {
                var fbx = this;
                var settings = fbx.getSettings();

                if (e.relatedTarget && e.relatedTarget.href) {
                    window.location.href = e.relatedTarget.href;
                    return;
                }

                if (settings.autoFilter === false) return false;

                setTimeout(function () {
                    if (fbx) {
                        fbx.clear();
                    }
                }, 100);
            }
        },
        // autoFilter: true,
        highlight: true,
        enableObserver: false,
        useDomFilter: true,
        keyNav: true,
        inputDelay: 300
    });
}

function copyContentToClipboard(el) {
    var range, selection;

    if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(el);
        range.select();
        copy();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(el);
        selection.removeAllRanges();
        selection.addRange(range);
        copy();
        selection.removeAllRanges();
    }

    function copy() {
        document.execCommand("Copy");
    }
}

/**
 * Disqus loader.
 *
 * Note: global variables are set in @post.njk:
 * disqus_shortname, disqus_url, disqus_identifier
 * DOM needs to have a div with id "disqus_thread"
 */
function disqus() {
    var e;

    if (disqus_loaded) return false;

    disqus_loaded = true;
    e = document.createElement("script");
    e.type = "text/javascript";
    e.async = true;
    e.src = "//" + disqus_shortname + ".disqus.com/embed.js";
    (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(e);
}

function loadAsset(path, callback, o) {
    var selector = getUrlParameter("selector", path).replace(/['"]+/g, "").trim(),
        async = getUrlParameter("async", path) === "true",
            assetType = "js",
            assetTag = "script",
            assetSrc = "src",
            needAsset = true;

    if (selector.length > 0 && !document.querySelector(selector)) return false;

    function getUrlParameter(name, url) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        url = url ? url : window.location.search;

        var regex = new RegExp("[\\?&]" + name + "=([^&]*)"),
            results = regex.exec(url);

        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    path = path.split(/\?(.+)/)[0]; // remove url parameters (settings)

    if (path.slice(-3) === "css") {
        assetType = "css";
        assetTag = "link";
        assetSrc = "href";
    }

    if (document.querySelector(assetTag + '[' + assetSrc + '="' + path + '"]')) needAsset = false;

    function callCallback() {
        if (callback) {
            var obj = {};
            if (selector) obj.selector = selector;
            if (o) obj.o = o;
            callback.call(obj);
        }
    }

    if (needAsset) {

        var asset = document.createElement(assetTag);
        asset[assetSrc] = path;

        if (assetType === "js") {
            asset.type = "text/javascript";
            asset.async = async;

            if (asset.readyState) { // IE
                asset.onreadystatechange = function () {
                    if (asset.readyState === "loaded" || asset.readyState === "complete") {
                        asset.onreadystatechange = null;
                        callCallback();
                    }
                };
            } else { // others
                asset.onload = callCallback;
            }

        } else { // CSS
            asset.rel = "stylesheet";
            callCallback();
        }
        document.getElementsByTagName("head")[0].appendChild(asset);

    } else { // always run callback
        callCallback();
    }
}

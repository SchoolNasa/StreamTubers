var proxy;

/*
 *	Methods 
 */
function init() {
    if (!proxy) {
        console.log("init");
        proxy = CNComm.init({
            target: window.parent,
            origin: [
                'https://www.cartoonnetwork.com.ar',
                'https://www.cartoonnetwork.cl',
                'https://www.cartoonnetwork.com.co'
            ]
        });
    }
}

function ready() {
    if (proxy) {
        console.log("ready");
        proxy.ready(onProxyReady);
    }
}

function showAd() {
    if (proxy) {
        console.log("showAd");
        proxy.request({
            namespace: 'CN',
            method: 'showAd'
        }, onShowAd);
    }
}

function closeTakeover() {
    if (proxy) {
        console.log("closeTakeover");
        proxy.request({
            namespace: 'CN',
            method: 'closeTakeover'
        }, onCloseTakeover);
    }
}

function track(context, name, id) {
    if (proxy) {
        console.log("track");
        proxy.request({
            namespace: 'Omniture',
            method: 'trackSiteMilestones',
            args: [{ context: context, name: name, ID: id }]
        }, onTrackSiteMilestone);
    }
}

/*
 *	Events 
 */
function onProxyReady() {
    SendMessage("Manager", "onProxyReady");

    if (proxy) {
        console.log("getFeed");
        proxy.request({
            namespace: 'CN',
            method: 'getFeed'
        }, onGetFeed);
    }
}

function onGetFeed(results) {
    console.log("onGetFeed");
    console.log(results);
}

function onShowAd(result) {
    console.log("onShowAd");
    console.log(results);
}

function onCloseTakeover(result) {
    console.log("onCloseTakeover");
    console.log(results);
}

function onTrackSiteMilestone(results) {
    console.log("onTrackSiteMilestone");
    console.log(results);
}
export const size = function(size) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var vw = (100 * w) / 100
    return (vw * size) / 1920
}

export const size_m = function(size) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var vw = (100 * w) / 100
    return (vw * size) / 375
}
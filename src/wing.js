export function IsWingResource(path) {
    return path.indexOf('.wmeta.') > 0;
}
// 获取真实地址
export function WingResourceUrl(path) {
    let url = window.localStorage.getItem('WING_META_API');
    if (url == null) url = `http://${window.location.hostname}:19012/api/wgw/netfile/get`;
    url += '?file=' + encodeURIComponent(path);
    return url;
}

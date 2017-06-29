if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-text-unicode/aui-text-unicode.js']) {
   __coverage__['build/aui-text-unicode/aui-text-unicode.js'] = {"path":"build/aui-text-unicode/aui-text-unicode.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":28},"end":{"line":1,"column":47}}},"2":{"name":"(anonymous_2)","line":20,"loc":{"start":{"line":20,"column":13},"end":{"line":20,"column":36}}},"3":{"name":"(anonymous_3)","line":38,"loc":{"start":{"line":38,"column":20},"end":{"line":38,"column":48}}},"4":{"name":"(anonymous_4)","line":50,"loc":{"start":{"line":50,"column":19},"end":{"line":50,"column":47}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":58,"column":67}},"2":{"start":{"line":9,"column":0},"end":{"line":9,"column":32}},"3":{"start":{"line":11,"column":0},"end":{"line":53,"column":2}},"4":{"start":{"line":21,"column":8},"end":{"line":21,"column":25}},"5":{"start":{"line":23,"column":8},"end":{"line":25,"column":9}},"6":{"start":{"line":24,"column":12},"end":{"line":24,"column":52}},"7":{"start":{"line":27,"column":8},"end":{"line":27,"column":21}},"8":{"start":{"line":39,"column":8},"end":{"line":39,"column":55}},"9":{"start":{"line":51,"column":8},"end":{"line":51,"column":55}},"10":{"start":{"line":55,"column":0},"end":{"line":55,"column":25}}},"branchMap":{"1":{"line":23,"type":"if","locations":[{"start":{"line":23,"column":8},"end":{"line":23,"column":8}},{"start":{"line":23,"column":8},"end":{"line":23,"column":8}}]}},"code":["(function () { YUI.add('aui-text-unicode', function (A, NAME) {","","/**"," * Utility for testing strings against unicode patterns."," *"," * @module aui-text"," */","","var UData = A.Text.Data.Unicode;","","var Unicode = {","    /**","     * Return a unicode regex for the given group (under A.Text.Data.Unicode).","     *","     * @param {String} group","     * @param {String} flags","     * @method compile","     * @private","     */","    compile: function(group, flags) {","        var regex = null;","","        if (UData.hasOwnProperty(group)) {","            regex = new RegExp(UData[group], flags);","        }","","        return regex;","    },","","    /**","     * Tests a string against an Unicode pattern. Returns the first match.","     *","     * @param {String} str","     * @param {String} group","     * @param {String} flags","     * @method match","     */","    match: A.cached(function(str, group, flags) {","        return Unicode.compile(group, flags).exec(str);","    }),","","    /**","     * Tests a string against an Unicode pattern. Returns true or false.","     *","     * @param {String} str","     * @param {String} group","     * @param {String} flags","     * @method test","     */","    test: A.cached(function(str, group, flags) {","        return Unicode.compile(group, flags).test(str);","    })","};","","A.Text.Unicode = Unicode;","","","}, '3.0.3-deprecated.51', {\"requires\": [\"aui-text-data-unicode\"]});","","}());"]};
}
var __cov_YzsRW3qlx96fcyZFvpNnlA = __coverage__['build/aui-text-unicode/aui-text-unicode.js'];
__cov_YzsRW3qlx96fcyZFvpNnlA.s['1']++;YUI.add('aui-text-unicode',function(A,NAME){__cov_YzsRW3qlx96fcyZFvpNnlA.f['1']++;__cov_YzsRW3qlx96fcyZFvpNnlA.s['2']++;var UData=A.Text.Data.Unicode;__cov_YzsRW3qlx96fcyZFvpNnlA.s['3']++;var Unicode={compile:function(group,flags){__cov_YzsRW3qlx96fcyZFvpNnlA.f['2']++;__cov_YzsRW3qlx96fcyZFvpNnlA.s['4']++;var regex=null;__cov_YzsRW3qlx96fcyZFvpNnlA.s['5']++;if(UData.hasOwnProperty(group)){__cov_YzsRW3qlx96fcyZFvpNnlA.b['1'][0]++;__cov_YzsRW3qlx96fcyZFvpNnlA.s['6']++;regex=new RegExp(UData[group],flags);}else{__cov_YzsRW3qlx96fcyZFvpNnlA.b['1'][1]++;}__cov_YzsRW3qlx96fcyZFvpNnlA.s['7']++;return regex;},match:A.cached(function(str,group,flags){__cov_YzsRW3qlx96fcyZFvpNnlA.f['3']++;__cov_YzsRW3qlx96fcyZFvpNnlA.s['8']++;return Unicode.compile(group,flags).exec(str);}),test:A.cached(function(str,group,flags){__cov_YzsRW3qlx96fcyZFvpNnlA.f['4']++;__cov_YzsRW3qlx96fcyZFvpNnlA.s['9']++;return Unicode.compile(group,flags).test(str);})};__cov_YzsRW3qlx96fcyZFvpNnlA.s['10']++;A.Text.Unicode=Unicode;},'3.0.3-deprecated.51',{'requires':['aui-text-data-unicode']});

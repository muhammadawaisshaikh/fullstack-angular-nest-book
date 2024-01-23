// Internal way to create Module
var MathUtils;
(function (MathUtils) {
    function add(x, y) {
        return x + y;
    }
    MathUtils.add = add;
    function subtract(x, y) {
        return x - y;
    }
    MathUtils.subtract = subtract;
})(MathUtils || (MathUtils = {}));
// Usage:
var result = MathUtils.add(5, 3);

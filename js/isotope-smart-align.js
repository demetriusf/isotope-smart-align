$.Isotope.prototype._smartAlignReset = function() {
	this.smartAlign = {
		height : 0
	}
};
$.Isotope.prototype._smartAlignLayout = function(e) {
	var t = this.element.width();
	var n = this;
	var r = this.smartAlign;
	var i = $(this.options.itemSelector).width() || 0;
	var s = Math.round(this.options.smartAlign
			&& this.options.smartAlign.marginTop) || 0;
	var o = Math.floor(parseFloat(t / i));
	var u = Math.floor(o * i);
	var a = Math.round((t - u) / (o - 1));
	var f = 1;
	var l = 0;
	var c = 0;
	if (o == 0)
		o = 1;
	e.each(function(e) {
		var t = $(this);
		var r = t.outerHeight() + s;
		if (r > l) {
			l = r
		}
		var u = 0;
		var h = c;
		u = (f - 1) * i + a * (f - 1);
		if (o == 1)
			u = 0;
		if (f % o != 0) {
			if (f == 1) {
				n._pushPosition(t, 0, h)
			} else {
				n._pushPosition(t, u, h)
			}
		} else {
			n._pushPosition(t, u, h);
			f = 0
		}
		if (f % o == 0) {
			c += l;
			l = 0
		}
		f++
	});
	r["height"] = c + l
};
$.Isotope.prototype._smartAlignGetContainerSize = function() {
	var e = {};
	e.height = this.smartAlign.height;
	return e
};
$.Isotope.prototype._smartAlignResizeChanged = function() {
	return true
}
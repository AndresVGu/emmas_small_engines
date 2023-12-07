//Help ToolTip
var helpTooltip = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip-help"]'));
var helpToolTipDisplay = helpTooltip.map(function(t){
 return new bootstrap.Tooltip(t);
});
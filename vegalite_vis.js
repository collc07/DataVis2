var spec2 = "suicidedeaths_states.vg.json";
vegaEmbed("#choropleth", spec2).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec2 = "suicidedeaths_agegender.vg.json";
vegaEmbed("#scatterplot", spec2).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec2 = "suicidedeaths_aboriginal.vg.json";
vegaEmbed("#butterfly", spec2).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec2 = "suicidedeaths_external.vg.json";
vegaEmbed("#stackedbar", spec2).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec2 = "suicidedeaths_mechanism.vg.json";
vegaEmbed("#bar", spec2).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

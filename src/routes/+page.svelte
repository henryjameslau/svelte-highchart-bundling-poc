<script>
    import StackedBarChart from "../lib/charts/StackedBarChart.svelte";
    import { areaData, barData, barGroupData, barStackedData, scatterData, lineData } from '../lib/utils/exampleData.js';

    const stackedBarChartconfig = {
    title: "Chart title",
    subtitle: "Subtitle",
    source: "Source: UN",
    xAxisLabel: "Population (millions)",
    valueSuffix: " million",
    yKey:"name",
    xKey:"value",
    zKey:"category"
    
  };
</script>

<main>
    <StackedBarChart data={barStackedData} config={stackedBarChartconfig}/>
</main>


type Widget = {
    type: "barChart" | "lineChart" | "scatterPlot";
    position: { x: number; y: number; width: number; height: number };
  };

  const maybeWidget = {
    type: "barChart",
    position: { x: 0, y: 0, width: 100, height: 200 },
  };
   
  type Test = typeof maybeWidget extends Widget ? true : false;
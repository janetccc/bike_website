new Chartist.Bar('#cost_bar_graph', {
	labels: ['Austin', 'Boston', 'Chattanooga', 'Chicago', 'Columbus', 'Denver', 'Houston', 'Minneapolis', 'New York City', 'San Francisco Bay Area', 'Washington'],
	series: [
    	[6, 9, 2, 10, 1, 10, 8, 4, 10, 9, 5],
	]}, {
		reverseData: true,
		horizontalBars: true,
		high: 10,
		referenceValue: 1,
		axisY: {
	    	offset: 100,
		},
		axisX: {
	    	onlyInteger: true,
		}
	}
);

new Chartist.Bar('#convenience_bar_graph', {
	labels: ['Austin', 'Boston', 'Chattanooga', 'Chicago', 'Columbus', 'Denver', 'Houston', 'Minneapolis', 'New York City', 'San Francisco Bay Area', 'Washington'],
	series: [
    [4, 4, 6, 5, 7, 2, 5, 4, 4, 9, 8],
	]}, {
		reverseData: true,
		horizontalBars: true,
		high: 10,
		referenceValue: 1,
		axisY: {
	    	offset: 100,
		},
		axisX: {
	    	onlyInteger: true,
		}
	}
);

new Chartist.Bar('#area_bar_graph', {
	labels: ['Austin', 'Boston', 'Chattanooga', 'Chicago', 'Columbus', 'Denver', 'Houston', 'Minneapolis', 'New York City', 'San Francisco Bay Area', 'Washington'],
	series: [
    [3, 6, 7, 10, 1, 10, 2, 1, 8, 5, 2],
	]}, {
		reverseData: true,
		horizontalBars: true,
		high: 10,
		referenceValue: 1,
		axisY: {
	    	offset: 100,
		},
		axisX: {
	    	onlyInteger: true,
		}
	}
);

new Chartist.Bar('#activity_bar_graph', {
	labels: ['Austin', 'Boston', 'Chattanooga', 'Chicago', 'Columbus', 'Denver', 'Houston', 'Minneapolis', 'New York City', 'San Francisco Bay Area', 'Washington'],
	series: [
    [3, 7, 2, 5, 2, 7, 3, 3, 2, 9, 3],
	]}, {
		reverseData: true,
		horizontalBars: true,
		high: 10,
		referenceValue: 1,
		axisY: {
	    	offset: 100,
		},
		axisX: {
	    	onlyInteger: true,
		}
	}
);



new Chartist.Bar('#system_size_bar_graph', {
	labels: ['Austin', 'Boston', 'Chattanooga', 'Chicago', 'Columbus', 'Denver', 'Houston', 'Minneapolis', 'New York City', 'San Francisco Bay Area', 'Washington'],
	series: [
    [4, 10, 10, 8, 2, 10, 8, 1, 10, 7, 7],
	]}, {
		reverseData: true,
		horizontalBars: true,
		high: 10,
		referenceValue: 1,
		axisY: {
	    	offset: 100,
		},
		axisX: {
	    	onlyInteger: true,
		}
	}
);
import Button from 'components/atoms/Button/Button';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useNavigate } from 'react-router-dom';

const AnalyticsUseBerry = () => {
	const completedData = {
		series: [
			{
				name: '',
				data: [100],
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'bar',
			},
			plotOptions: {
				bar: {
					borderRadius: 10,
					dataLabels: {
						position: 'top', // top, center, bottom
					},
				},
			},
			dataLabels: {
				enabled: true,
				formatter: function (val: any) {
					return val + '%';
				},
				offsetY: -20,
				style: {
					fontSize: '12px',
					colors: ['#304758'],
				},
			},

			xaxis: {
				categories: ['Completed'],
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
				crosshairs: {
					fill: {
						type: 'gradient',
						gradient: {
							colorFrom: '#D8E3F0',
							colorTo: '#BED1E6',
							stops: [0, 100],
							opacityFrom: 0.4,
							opacityTo: 0.5,
						},
					},
				},
				tooltip: {
					enabled: true,
				},
			},
			yaxis: {
				labels: {
					show: false,
					formatter: function (val: any) {
						return val + '%';
					},
				},
			},
		},
	};

	const timeData = {
		series: [
			{
				name: '',
				data: [1, 2, 1, 0, 1],
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'bar',
			},
			plotOptions: {
				bar: {
					borderRadius: 10,
					dataLabels: {
						position: 'top', // top, center, bottom
					},
				},
			},
			dataLabels: {
				style: {
					fontSize: '12px',
					colors: ['#304758'],
				},
			},

			xaxis: {
				categories: [
					'0s - 9s',
					'9s - 18s',
					'18s - 27s',
					'27s - 35s',
					'35s - 44s',
				],
			},
		},
	};

	const questionarre = {
		series: [
			{
				data: [0, 0, 0, 20, 80],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 350,
			},
			plotOptions: {
				bar: {
					borderRadius: 4,
					horizontal: true,
				},
			},
			dataLabels: {
				enabled: false,
			},
			xaxis: {
				categories: [
					'Too complicated.',
					'Not so complicated',
					'Normal',
					'Was not difficult',
					'Easy peasy!',
				],
			},
		},
	};

	const navigate = useNavigate();

	return (
		<div
			data-testid="analytic-tree-container"
			style={{ paddingBottom: '52px' }}
		>
			<h2 style={{ margin: '24px 0', paddingLeft: '20px' }}>
				Useberry testing
			</h2>
			<h2 style={{ paddingLeft: '20px', fontSize: '18px' }}>
				Completion Rates
			</h2>
			<ReactApexChart
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				options={completedData.options}
				series={completedData.series}
				type="bar"
				height={350}
			/>
			<h2 style={{ paddingLeft: '20px', fontSize: '18px' }}>
				Users (frequency) - Time
			</h2>
			<ReactApexChart
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				options={timeData.options}
				series={timeData.series}
				type="bar"
				height={350}
			/>
			<h2 style={{ paddingLeft: '20px', fontSize: '18px', marginTop: '32px' }}>
				Opinion Scale
			</h2>
			<ReactApexChart
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				options={questionarre.options}
				series={questionarre.series}
				type="bar"
				height={350}
			/>
			<div
				style={{
					padding: '24px 0 0 12px',
					display: 'flex',
					width: '100%',
					justifyContent: 'left',
				}}
			>
				<Button
					text="Back"
					onClick={() => navigate('/analytics-card-sorting')}
					variant="primary"
				/>
			</div>
		</div>
	);
};

export default AnalyticsUseBerry;

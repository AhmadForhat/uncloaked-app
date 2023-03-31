import Button from 'components/atoms/Button/Button';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useNavigate } from 'react-router-dom';

const AnalyticsCardSorting = () => {
	const questionarreData = {
		series: [
			{
				name: '',
				data: [0, 0, 0, 20, 80],
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
				categories: ['1', '2', '3', '4', '5'],
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
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
				labels: {
					show: false,
					formatter: function (val: any) {
						return val + '%';
					},
				},
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
				Tree Chart results
			</h2>
			<h2 style={{ paddingLeft: '20px', fontSize: '18px' }}>
				Avaliation about the test
			</h2>
			<ReactApexChart
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				options={questionarreData.options}
				series={questionarreData.series}
				type="bar"
				height={350}
			/>
			<div
				style={{
					padding: '24px 12px 0 0',
					display: 'flex',
					width: '100%',
					gap: '52px',
					justifyContent: 'space-between',
				}}
			>
				<Button
					text="Back"
					onClick={() => navigate('/analytics-tree')}
					variant="label"
				/>
				<Button
					text="Useberry"
					onClick={() => navigate('/analytics-useberry')}
					variant="primary"
				/>
			</div>
		</div>
	);
};

export default AnalyticsCardSorting;

import Button from 'components/atoms/Button/Button';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useNavigate } from 'react-router-dom';

const AnalyticsTree = () => {
	const questionarreData = {
		series: [
			{
				name: '',
				data: [0, 16.7, 0, 33.3, 50],
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

	const findDiscountData = {
		series: [83, 17, 0],
		options: {
			chart: {
				width: 380,
				type: 'pie',
			},
			labels: ['Success', 'Fail', 'Skip'],
			legend: {
				position: 'bottom',
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
					},
				},
			],
		},
	};

	const favouritesData = {
		series: [83, 17, 0],
		options: {
			chart: {
				width: 380,
				type: 'pie',
			},
			labels: ['Success', 'Fail', 'Skip'],
			legend: {
				position: 'bottom',
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
					},
				},
			],
		},
	};

	const dailyLookData = {
		series: [50, 33, 17, 0],
		options: {
			chart: {
				width: 380,
				type: 'pie',
			},
			labels: ['Success', 'Fail', 'Indirect Fail', 'Skip'],
			legend: {
				position: 'bottom',
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
					},
				},
			],
		},
	};

	const changePassowrd = {
		series: [100, 0, 0],
		options: {
			chart: {
				width: 380,
				type: 'pie',
			},
			labels: ['Success', 'Fail', 'Skip'],
			legend: {
				position: 'bottom',
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
					},
				},
			],
		},
	};

	const navigate = useNavigate();

	return (
		<div
			data-testid="analytic-tree-container"
			style={{ paddingBottom: '52px' }}
		>
			<h2 style={{ margin: '24px 0', paddingLeft: '20px' }}>
				Tree testing results
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
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
				}}
			>
				<div>
					<h2
						style={{ paddingLeft: '20px', fontSize: '18px', marginTop: '32px' }}
					>
						Find Discount
					</h2>
					<ReactApexChart
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						//@ts-ignore
						options={findDiscountData.options}
						series={findDiscountData.series}
						type="pie"
						height={350}
					/>
				</div>
				<div>
					<h2
						style={{ paddingLeft: '20px', fontSize: '18px', marginTop: '32px' }}
					>
						Favourites
					</h2>
					<ReactApexChart
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						//@ts-ignore
						options={favouritesData.options}
						series={favouritesData.series}
						type="pie"
						height={350}
					/>
				</div>
				<div>
					<h2
						style={{ paddingLeft: '20px', fontSize: '18px', marginTop: '32px' }}
					>
						Daily look
					</h2>
					<ReactApexChart
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						//@ts-ignore
						options={dailyLookData.options}
						series={dailyLookData.series}
						type="pie"
						height={350}
					/>
				</div>
				<div>
					<h2
						style={{ paddingLeft: '20px', fontSize: '18px', marginTop: '32px' }}
					>
						Change password
					</h2>
					<ReactApexChart
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						//@ts-ignore
						options={changePassowrd.options}
						series={changePassowrd.series}
						type="pie"
						height={350}
					/>
				</div>
			</div>
			<div
				style={{
					padding: '24px 12px 0 0',
					display: 'flex',
					width: '100%',
					justifyContent: 'right',
				}}
			>
				<Button
					text="Card Sorting"
					onClick={() => navigate('/analytics-card-sorting')}
					variant="primary"
				/>
			</div>
		</div>
	);
};

export default AnalyticsTree;

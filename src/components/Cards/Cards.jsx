import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return 'Loading...';
	}

	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify='center'>
				<Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Infected
						</Typography>
						<Typography variant='h5' component='h2'>
							<CountUp start={0} end={confirmed.value} duration={2.75} separator=',' />
						</Typography>
					</CardContent>
				</Grid>
				<Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Recovered
						</Typography>
						<Typography variant='h5' component='h2'>
							<CountUp start={0} end={recovered.value} duration={2.75} separator=',' />
						</Typography>
					</CardContent>
				</Grid>
				<Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Deaths
						</Typography>
						<Typography variant='h5' component='h2'>
							<CountUp start={0} end={deaths.value} duration={2.75} separator=',' />
						</Typography>
					</CardContent>
				</Grid>
				<Grid xs={12} md={12} className={styles.center}>
					<Typography color='textSecondary'> Data last Updated: {new Date(lastUpdate).toDateString()}</Typography>
				</Grid>
			</Grid>
		</div>
	);
};
export default Info;

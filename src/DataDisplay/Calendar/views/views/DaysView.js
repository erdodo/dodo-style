import React from 'react';
import ViewNavigation from '../parts/ViewNavigation';

export default class DaysView extends React.Component {
	static defaultProps = {
		isValidDate: () => true,
		renderDay: ( props, date ) => <td { ...props }>{ date.date() }</td>,
	}

	render() {
		return (
			<div className="rdtDays p-1">
				<div className={"w-full flex flex-col"}>
					<div>
						{ this.renderNavigation() }
						{ this.renderDayHeaders() }
					</div>
					<div className={"w-full"}>
						{ this.renderDays() }
					</div>
					{ this.renderFooter() }
				</div>
			</div>
		);
	}

	renderNavigation() {
		const date = this.props.viewDate;
		const locale = date.localeData();
		return (
			<ViewNavigation
				onClickPrev={ () => this.props.navigate( -1, 'months' ) }
				onClickSwitch={ () => this.props.showView( 'months' ) }
				onClickNext={ () => this.props.navigate( 1, 'months' ) }
				switchContent={ locale.months( date ) + ' ' + date.year() }
				switchColSpan={5}
				switchProps={ { 'data-value': this.props.viewDate.month() } }
			/>
		);
	}

	renderDayHeaders() {
		const locale = this.props.viewDate.localeData();
		let dayItems = getDaysOfWeek( locale ).map( (day, index) => (
			<td key={ day + index } className="dow font-[300]">{ day }</td>
		));

		return (
			<tr className={"bg-gray-50 dark:bg-gray-900/50 flex flex-row justify-between items-center text-center mx-1"}>
				{ dayItems }
			</tr>
		);
	}

	renderDays() {
		const date = this.props.viewDate;
		const startOfMonth = date.clone().startOf('month');
		const endOfMonth = date.clone().endOf('month');

		// We need 42 days in 6 rows
		// starting in the last week of the previous month
		let rows = [[], [], [], [], [], []];

		let startDate = date.clone().subtract( 1, 'months');
		startDate.date( startDate.daysInMonth() ).startOf('week');

		let endDate = startDate.clone().add( 42, 'd' );
		let i = 0;

		while ( startDate.isBefore( endDate ) ) {
			let row = getRow( rows, i++ );
			row.push( this.renderDay( startDate, startOfMonth, endOfMonth ) );
			startDate.add( 1, 'd' );
		}

		return rows.map( (r, i) => (
			<tr className={"w-full"} key={ `${endDate.month()}_${i}` }>{ r }</tr>
		));
	}

	renderDay( date, startOfMonth, endOfMonth ) {
		let selectedDate = this.props.selectedDate;

		let dayProps = {
			key: date.format('M_D'),
			'data-value': date.date(),
			'data-month': date.month(),
			'data-year': date.year()
		};

		let className = 'rdtDay';
		if ( date.isBefore( startOfMonth ) ) {
			className += ' rdtOld text-gray-400 dark:text-gray-600';
		}
		else if ( date.isAfter( endOfMonth ) ) {
			className += ' rdtNew text-gray-400 dark:text-gray-600';
		}
		if ( selectedDate && date.isSame( selectedDate, 'day' ) ) {
			className += ' rdtActive hover:bg-info-400 bg-info-500 dark:bg-info-500/50 dark:hover:bg-info-400/60 text-white dark:text-white rounded-full';
		}
		if ( date.isSame( this.props.moment(), 'day' ) ) {
			className += ' rdtToday  text-info-500 dark:text-info-500';
		}

		if ( this.props.isValidDate(date) ) {
			dayProps.onClick = this._setDate;
		}
		else {
			className += ' rdtDisabled';
		}
		className +=" text-center px-1.5 py-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600/90 rounded-full hover:dark:text-white";
		dayProps.className = className;

		return this.props.renderDay(
			dayProps, date.clone(), selectedDate && selectedDate.clone()
		);
	}

	renderFooter() {
		if ( !this.props.timeFormat ) return;

		const date = this.props.viewDate;
		return (
			<div>
				<div className={"text-center py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer"}>
					<div onClick={ () => this.props.showView('time') }

						className="rdtTimeToggle">
						{ date.format( this.props.timeFormat ) }
					</div>
				</div>
			</div>
		);
	}

	_setDate = e => {
		this.props.updateDate( e );
	}
}

function getRow( rows, day ) {
	return rows[ Math.floor( day / 7 ) ];
}

/**
 * Get a list of the days of the week
 * depending on the current locale
 * @return {array} A list with the shortname of the days
 */
function getDaysOfWeek( locale ) {
	const first = locale.firstDayOfWeek();
	let dow = [];
	let i = 0;

	locale._weekdaysMin.forEach(function (day) {
		dow[(7 + (i++) - first) % 7] = day;
	});

	return dow;
}

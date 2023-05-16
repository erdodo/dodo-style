import React from 'react';
import ViewNavigation from '../parts/ViewNavigation';

export default class MonthsView extends React.Component {
	render() {
		return (
			<div className="rdtMonths w-full">
				<div className={"w-full text-center px-3"}>

						{ this.renderNavigation() }

				</div>
				<div className={"w-full text-center"}>

						{ this.renderMonths() }

				</div>
			</div>
		);
	}

	renderNavigation() {
		let year = this.props.viewDate.year();

		return (
			<ViewNavigation
				onClickPrev={ () => this.props.navigate( -1, 'years' ) }
				onClickSwitch={ () => this.props.showView( 'years' ) }
				onClickNext={ () => this.props.navigate( 1, 'years' ) }
				switchContent={ year }
				switchColSpan="2"
			/>
		);
	}

	renderMonths() {
		// 12 months in 3 rows for every view
		let rows = [ [], [], [] ];

		for ( let month = 0; month < 12; month++ ) {
			let row = getRow( rows, month );

			row.push( this.renderMonth( month ) );
		}

		return rows.map( (months, i) => (
			<div className={"flex flex-row items-center justify-between text-center"} key={i}>{ months }</div>
		));
	}

	renderMonth( month ) {
		const selectedDate = this.props.selectedDate;
		let className = 'rdtMonth';
		let onClick;

		if ( this.isDisabledMonth( month ) ) {
			className += ' rdtDisabled text-gray-400 dark:text-gray-600';
		}
		else {
			onClick = this._updateSelectedMonth;
		}

		if ( selectedDate && selectedDate.year() === this.props.viewDate.year() && selectedDate.month() === month ) {
			className += ' rdtActive text-info-500 dark:text-info-400';
		}
		className += ' cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg py-2 px-3';
		let props = {key: month, className, 'data-value': month, onClick };

		if ( this.props.renderMonth ) {
			return this.props.renderMonth(
				props,
				month,
				this.props.viewDate.year(),
				this.props.selectedDate && this.props.selectedDate.clone()
			);
		}

		return (
			<td { ...props }>
				{ this.getMonthText( month ) }
			</td>
		);
	}

	isDisabledMonth( month ) {
		let isValidDate = this.props.isValidDate;

		if ( !isValidDate ) {
			// If no validator is set, all days are valid
			return false;
		}

		// If one day in the month is valid, the year should be clickable
		let date = this.props.viewDate.clone().set({month});
		let day = date.endOf( 'month' ).date() + 1;

		while ( day-- > 1 ) {
			if ( isValidDate( date.date(day) ) ) {
				return false;
			}
		}
		return true;
	}

	getMonthText( month ) {
		const localMoment = this.props.viewDate;
		const monthStr = localMoment.localeData().monthsShort( localMoment.month( month ) );

		// Because some months are up to 5 characters long, we want to
		// use a fixed string length for consistency
		return capitalize( monthStr.substring( 0, 3 ) );
	}

	_updateSelectedMonth = event => {
		this.props.updateDate( event );
	}
}

function getRow( rows, year ) {
	if ( year < 4 ) {
		return rows[0];
	}
	if ( year < 8 ) {
		return rows[1];
	}

	return rows[2];
}

function capitalize( str ) {
	return str.charAt( 0 ).toUpperCase() + str.slice( 1 );
}

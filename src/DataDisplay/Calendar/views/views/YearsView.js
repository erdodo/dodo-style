import React from 'react';
import ViewNavigation from '../parts/ViewNavigation';

export default class YearsView extends React.Component {
	static defaultProps = {
		renderYear: ( props, year ) => <td { ...props }>{ year }</td>,
	};

	render() {
		return (
			<div className="rdtYears">
				<div className={"w-full text-center px-3"}>

						{ this.renderNavigation() }

				</div>
				<div className={"w-full text-center"}>

						{ this.renderYears() }

				</div>
			</div>
		);
	}

	renderNavigation() {
		const viewYear = this.getViewYear();
		return (
			<ViewNavigation
				onClickPrev={ () => this.props.navigate( -10, 'years' ) }
				onClickSwitch={ () => this.props.showView( 'years' ) }
				onClickNext={ () => this.props.navigate( 10, 'years' ) }
				switchContent={ `${viewYear}-${viewYear + 9}` }
			/>
		);
	}

	renderYears() {
		const viewYear = this.getViewYear();
		// 12 years in 3 rows for every view
		let rows = [ [], [], [] ];
		for ( let year = viewYear - 1; year < viewYear + 11; year++ ) {
			let row = getRow( rows, year - viewYear );

			row.push(
				this.renderYear( year )
			);
		}

		return rows.map( (years, i) => (
			<tr key={i}>{ years }</tr>
		));
	}

	renderYear( year ) {
		const selectedYear = this.getSelectedYear();
		let className = 'rdtYear';
		let onClick;

		if ( this.isDisabledYear( year ) ) {
			className += ' rdtDisabled text-gray-400 dark:text-gray-600';
		}
		else {
			onClick = this._updateSelectedYear;
		}

		if ( selectedYear === year ) {
			className += ' rdtActive text-info-600 dark:text-info-400';
		}
		className += ' cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg py-2 px-2';
		let props = {key: year, className, 'data-value': year, onClick };

		return this.props.renderYear(
			props,
			year,
			this.props.selectedDate && this.props.selectedDate.clone()
		);
	}

	getViewYear() {
		return parseInt( this.props.viewDate.year() / 10, 10 ) * 10;
	}

	getSelectedYear() {
		return this.props.selectedDate && this.props.selectedDate.year();
	}

	disabledYearsCache = {};
	isDisabledYear( year ) {
		let cache = this.disabledYearsCache;
		if ( cache[year] !== undefined ) {
			return cache[year];
		}

		let isValidDate = this.props.isValidDate;

		if ( !isValidDate ) {
			// If no validator is set, all days are valid
			return false;
		}

		// If one day in the year is valid, the year should be clickable
		let date = this.props.viewDate.clone().set({year});
		let day = date.endOf( 'year' ).dayOfYear() + 1;

		while ( day-- > 1 ) {
			if ( isValidDate( date.dayOfYear(day) ) ) {
				cache[year] = false;
				return false;
			}
		}

		cache[year] = true;
		return true;
	}

	_updateSelectedYear = event => {
		this.props.updateDate( event );
	}
}

function getRow( rows, year ) {
	if ( year < 3 ) {
		return rows[0];
	}
	if ( year < 7 ) {
		return rows[1];
	}

	return rows[2];
}

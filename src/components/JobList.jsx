import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisiblePositions } from 'store/positions/position-selectors';
import { selectFilter } from '../store/filters/filter-selectors.js';
import { addFilter } from 'store/filters/filter-actions';

const JobList = () => {
	const dispatch = useDispatch();
	const currentFilters = useSelector(selectFilter);
	const positions = useSelector(state =>
		selectVisiblePositions(state, currentFilters)
	);

	const handleAddFilter = filter => {
		dispatch(addFilter(filter));
	};

	return (
		<div className='job-list'>
			{positions.map(item => (
				<JobPosition
					key={item.id}
					{...item}
					handleAddFilter={handleAddFilter}
				/>
			))}
		</div>
	);
};

export { JobList };

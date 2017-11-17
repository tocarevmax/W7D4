import {connect} from 'react-redux';
import ItemDetail from './item_detail';
import {selectItem} from '../../../reducers/selectors.js';

const mapStateToProps = (state, ownProps) => {
    return {item:selectItem(state, ownProps)};
};

const mapDispatchToProps = dispatch => ({

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);

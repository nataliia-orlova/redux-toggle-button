import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton';
import { connect } from 'react-redux';

function App({ theme }) {
    return (
        <div className={`App App--${theme}`}>
            <ToggleButton />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme,
    };
};

export default connect(mapStateToProps)(App);

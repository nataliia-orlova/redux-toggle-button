import React from 'react';
import { connect } from 'react-redux';
import { toggle } from './redux/actions';

function ToggleButton({ theme, toggle }) {
    return (
        <div>
            <h1 className={`heading--${theme}`}>
                You can change the color theme
            </h1>
            <label className='switch'>
                <input
                    onChange={(e) => toggle(e.target.checked)}
                    type='checkbox'
                />
                <span className='slider round'></span>
            </label>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme,
    };
};
const mapDispatchToProps = {
    toggle,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButton);

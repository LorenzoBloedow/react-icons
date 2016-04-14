
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoPieGraph extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m0.1 20c0-0.4-0.1-0.9-0.1-1.2 0-9 7.3-16.3 16.3-16.3 0.3 0 0.8 0.1 1.2 0.1v17.4h-17.4z m6 11.4c-2-2.5-3.3-5.5-3.5-8.9h17.4v-17.4c3.4 0.2 6.4 1.5 8.9 3.5 3.7 3 6.1 7.5 6.1 12.7 0 8.9-7.3 16.2-16.2 16.2-5.2 0-9.7-2.4-12.7-6.1z"/></g>
            </IconBase>
        );
    }
}

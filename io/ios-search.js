
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoIosSearch extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m35 33.2l-1.8 1.8-8.8-8.8c-2.1 1.6-4.7 2.6-7.5 2.6-6.6 0-11.9-5.4-11.9-11.9s5.3-11.9 11.9-11.9 11.9 5.3 11.9 11.9c0 2.8-1 5.4-2.6 7.4z m-25.6-8.7c2 2 4.7 3 7.5 3s5.4-1.1 7.5-3.1 3.1-4.7 3.1-7.5-1.1-5.5-3.1-7.5-4.7-3.1-7.5-3.1-5.5 1-7.5 3.1-3.1 4.7-3.1 7.5 1 5.5 3.1 7.6z"/></g>
            </IconBase>
        );
    }
}

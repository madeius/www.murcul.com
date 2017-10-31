import React from 'react'

export default class RadioButton extends React.Component {  
    constructor(props) {
      super(props);
      this.state = {selected: false};
    }

    toggle() {
      const {onChange} = this.context.radioGroup;
      const selected = !this.state.selected;
      this.setState({selected});
      onChange(selected, this);
    }

    setSelected(selected) {
      this.setState({selected});
    }

    render() {
      let classname = this.state.selected ? 'active' : '';
      return (
        <button type="button" className={classname}
            onClick={this.toggle.bind(this)}>
        </button>
      );
    }
  }

  RadioButton.contextTypes = {  
    radioGroup: React.PropTypes.object
  };
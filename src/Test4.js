class RichFilter {
  constructor(props) {
    this.state = {
      values: props.value || [],
      options: props.options || [],
      optionToValue: props.optionToValue || (o => o),
      optionsFilter: props.optionsFilter || null,
      disabled: props.disabled || false,
      multiple: props.multiple || false,
      allowEmptyValue: props.allowEmptyValue || false,
      renderValues: props.renderValues || (values => values.toString()),
      renderOption: props.renderOption || (option => option.toString()),
      domAttributes: props.domAttributes || {},
      styleProperties: props.styleProperties || {},
      classNames: props.className || [],
      onChange: props.onChange || null
    }

  }
}

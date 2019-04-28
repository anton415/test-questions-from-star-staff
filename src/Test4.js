class RichFilter {
  constructor(props) {
    this.values = props.value || []
    this.options = props.options || []
    this.optionToValue = props.optionToValue || (o => o)
    this.optionsFilter = props.optionsFilter || null
    this.disabled = props.disabled || false
    this.multiple = props.multiple || false
    this.allowEmptyValue = props.allowEmptyValue || false
    this.renderValues = props.renderValues || (values => values.toString())
    this.renderOption = props.renderOption || (option => option.toString())
    this.domAttributes = props.domAttributes || {}
    this.styleProperties = props.styleProperties || {}
    this.classNames = props.className || []
    this.onChange = props.onChange || null
  }
}

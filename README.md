
# Select Component

Select component for React

| Prop          | Values               |
| :------------ | :------------------- |
| selectOptions | Object               |
| showOptions   | showOptions function |
| hideOptions   | hideOptions function |
| placeHolder   | String               |
| selectedText  | String               |

```
constructor(props) {
  super(props)

  this.state = {
    activeSelect: ''
  }
}

activeSelect (event) {
  this.setState({ activeSelect: event.target.innerText })
}

showOptions (event) {
  event.target.offsetParent.lastChild.classList.toggle("show");
}

hideOptions (event) {
  event.preventDefault();
  event.target.offsetParent.classList.toggle("show");
}

selectOptions () {
  const data = [
    {
      name: 'Item one',
      id: 'one'
    },
    {
      name: 'Item two',
      id: 'two'
    },
    {
      name: 'Item three',
      id: 'three'
    }
  ]

  return data.map((data) => {
    return (
      <a
        className="dropdown-item"
        key={data.id}
        onMouseUp={this.hideOptions.bind(this)}
        onClick={this.activeSelect.bind(this)} >
          {data.name}
      </a>
    )
  })
}

render () {
  return (
    {!this.state.activeSelect
      ? <SelectComponent
          selectOptions={this.selectOptions()}
          showOptions={this.showOptions.bind(this)}
          placeHolder="Please select..."
          selectedText={null} />
      : <SelectComponent
          selectOptions={this.selectOptions()}
          showOptions={this.showOptions.bind(this)}
          placeHolder="Please select..."
          selectedText={this.state.activeSelect} />
    }
  )
}
```
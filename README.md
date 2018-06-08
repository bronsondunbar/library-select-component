
# Select Component

Select component for React

Install and save component as a dependency

```

npm install --save library-select-component

```

Import component into your app

```

import Select from 'library-select-component'

```

Create an array of objects with the keys being name and id

```

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

```

Create and assign active select state with empty value

```

constructor(props) {
  super(props)

  this.state = {
    activeSelect: ''
  }
}

```

Create the function that will handle the active select state

```

activeSelect (event) {
  this.setState({ activeSelect: event.target.innerText })
}

```

Create the function that will show the select options

```

showOptions (event) {
  event.target.offsetParent.lastChild.classList.toggle("show");
}

```

Create the function that will hide the select options

```

hideOptions (event) {
  event.preventDefault();
  event.target.offsetParent.classList.toggle("show");
}

```

Create the function that will generate the select options

```

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

```

Render the component with the functions we created, object array as well as any other props that are needed

```

render() {
  return (
    <Fragment>
      <Select
        selectOptions={this.selectOptions()}
        showOptions={this.showOptions.bind(this)}
        placeHolder="Please select..."
        selectedText={!this.state.activeSelect ? null : this.state.activeSelect} />
    </Fragment>
  )
}

```


| Prop          | Values               |
| :------------ | :------------------- |
| selectOptions | Object               |
| showOptions   | showOptions function |
| hideOptions   | hideOptions function |
| placeHolder   | String               |
| selectedText  | String               |
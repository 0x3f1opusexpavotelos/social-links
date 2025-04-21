
class Form {
  // declare instance property here and assign default value to them

  element = document.createElement('form')
  heading = document.createElement('h2')
  closeBtn = document.createElement('button')
  /**
   * I am not asking the user give me their own form element
   * I am gonna make a form element for my user and that's gonna 
   * be on the instance object as the element property
   * And so the way that we access properties of an instance within the constructor and other method we might be using is with keyword this
   */
  constructor(type, title, content) {
    // store content as property of the instace object
    // put heading near the top of form
    this.element.appendChild(this.heading)
    this.element.appendChild(content)
    // nest close btn inside the form
    this.element.appendChild(this.closeBtn)
    // take/consume any info user passing in to this particular instance
    // type passing in to our constructor to be type attribute of the form
    // call set attrube method on the created form element
    this.element.setAttribute('type', type)
    // set text content of heading elem to whaterever the title that's passied in
    this.heading.textContent = title
    this.closeBtn.setAttribute('type', 'submit')
    this.closeBtn.textContent = 'close'
  }
}

export class Modal {
  // internal setup, create the open Button and dialog element for the user
  openButton = document.createElement('button')
  dialog = document.createElement('dialog')

  constructor(name, parentElement, contentElement) {
    // store as propetty of instance object, expose to the user to use
    this.name = name
    this.openButton.setAttribute("id", name)
    this.openButton.textContent = name
    this.parent = parentElement
    this.content = contentElement
    this.#setupForm()
    this.#registerOpenListener()
  }


  /**
   * internal setup for the user 
   */
  #setupForm() {
    const article = document.createElement('article')
    const form = new Form('dialog', this.name, this.content)
    article.appendChild(form.element)
    this.dialog.appendChild(article)

    const dialog = this.dialog
    form.element.addEventListener('submit', function (event) {
      // override/stop the browser default behavior, reload the page on submit,
      event.preventDefault()
      dialog.close()
    })
  }
  /**
   * attach listener to the open button, just close hte button
   */
  #registerOpenListener() {
    const dialog = this.dialog
    this.openButton.addEventListener('click', function () {
      dialog.showModal()
    })
  }
  /**
   *  expose render method, let user decide when to call it
   */
  render() {
    this.parent.replaceChildren(this.openButton)
    this.parent.appendChild(this.dialog)
  }
}

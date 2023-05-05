class AjaxFormSubmit {

  constructor(element, options) {
    this._elements = document.querySelectorAll(element);
    this._setParams(options);
    this._run();
  }

  _setParams(options) {
    this._debug = options.debug || false;
    this._callback = options.callback || null;
  }

  _run() {
    this._elements.forEach((form) => {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let data = new FormData(form);
        let action = form.action;
        let method = form.method;

        let csrfToken = document.head.querySelector("[name=csrf-token]");

        let request = new XMLHttpRequest();
        request.open(method, action);
        if (csrfToken != null) request.setRequestHeader("X-CSRF-TOKEN", document.head.querySelector("[name=csrf-token]").content);
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        request.send(data);
        form.reset();

        if (this._callback != null) this._callback();

        request.addEventListener('load', () => {
          if (request.status === 200) {
            if (this._debug) console.log('Form Submit Successfully');
          } else {
            if (this._debug) console.error('Something went wrong');
          }
        });
        request.addEventListener('error', () => {
          if (this._debug) console.error('Error submitting form');
        });

      });
    });
  }

}
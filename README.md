# AjaxFormSubmit

### Class for submitting html forms with ajax.


### View [demo](demo/index.html)


## How to use this plugin

1. Plug in minified JS file: 

```html
<script href="dist/js/AjaxFormSubmit.min.js"></script>
```

3. Call the plugin:

```html
<script>
    new AjaxFormSubmit('form[data-ajax-form]');
</script>
```

Plugin class argument must be in format such as:

```html
<script>
    document.querySelectorAll(argument);
</script>
```

Or if you want to enable debug mode (console messages) or pass callback function you can pass params such as:

```html
<script type="text/javascript">
    const alertSuccess = () => {
        alert('Successfully');
    };
    let alertForm = new AjaxFormSubmit('form[data-ajax-form]', {
        debug: true,
        callback: alertSuccess,
    });
</script>
```
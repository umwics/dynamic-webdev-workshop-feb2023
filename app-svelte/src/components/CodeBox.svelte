<script>
    import { bgColor, headerClass } from "../stores"
    
    let bodyCode, headerCode
    headerClass.subscribe(hClass => {
        headerCode = `<Header backgroundClass="${hClass}" />`
    })
    bgColor.subscribe(bCol => {
        bodyCode = `document.body.style="${bCol}"`
    })
    
</script>

<div id="codebox">
    <h3> CODEBOX </h3>
    <div id="codeset">
        <code>{headerCode}</code>
        <code>{bodyCode}</code>
    </div>
</div>
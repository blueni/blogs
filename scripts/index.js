;(async () => {
    let res = await $.get('docs/test1.md')
    console.log('res is:', res)


    let json = await $.get('scripts/docs.json')
    console.log('json is:', json)

    
    let html = marked(res)
    $('.md-content').html(html)
})()
 
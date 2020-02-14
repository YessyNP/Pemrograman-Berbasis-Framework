generateTittle = () => {
    return 'ini judul standar'
}

createTag = (title=  generateTittle(), tag = 'bebas') => {
    // tag = tag || 'css'
    // if (typeof tag === 'undefined'){
    //     tag = 'css'
    // }
    console.log(' Forum ' +  title + ' punya tag ' + tag);
}
createTag()
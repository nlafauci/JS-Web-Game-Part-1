function newImage (url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newWeapon (url, left, bottom){
    let object = newImage(url, left, bottom)
        object.addEventListener('click', function(){
        object.translate() //wanted to try to figure out how to move object to character, help?
})
    object.addEventListener('dblclick', function(){
        object.remove()
})
}

newImage ('assets/green-character.gif', 100, 100)
newImage ('assets/pine-tree.png', 450, 200)
newImage ('assets/tree.png', 200, 300)
newImage ('assets/tree.png', 800, 300)
newImage ('assets/pillar.png', 350, 100)
newImage ('assets/pillar.png', 550, 100)
newImage ('assets/crate.png', 150, 200)
newImage ('assets/well.png', 500, 425)
newWeapon ('assets/sword.png', 500, 405)
newWeapon ('assets/shield.png', 165, 185)
newWeapon ('assets/staff.png', 600, 100)



